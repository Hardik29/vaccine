// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.5;

contract vaccine{

    struct patientRecord{
        string name;
        mapping(string => bytes32) vaccineHash;
        mapping(string => bool) vaccineCompleted;
        mapping(string => uint256) vaccineSlots;
        string allergy;
        string dateOfBirth;
        string gender;
    }

    mapping(address => patientRecord) public hashMap;
    mapping(string => address) public NameToAddress;
    event hashGenertaed(bytes32);
    event isAlreadyRegistered(bool);

    function registered() public{
        if(keccak256(abi.encodePacked(hashMap[msg.sender].name))  == keccak256(abi.encodePacked("")))
        emit  isAlreadyRegistered(true);
        else
        emit  isAlreadyRegistered(false);
    }
    function PatientRegsister(
        string memory patientName,
        string memory allergy,
        string memory dateOfBirth,
        string memory gender) public{ 
        require(keccak256(abi.encodePacked(hashMap[msg.sender].name))  == keccak256(abi.encodePacked("")));
        patientRecord storage pRecord = hashMap[msg.sender];
        NameToAddress[patientName] = msg.sender;
        pRecord.name = patientName;
        pRecord.allergy = allergy;
        pRecord.dateOfBirth = dateOfBirth;
        pRecord.gender = gender;
    }    

    function VaccineRegister(
        string memory vaccineType,
        string memory vaccineSlots
    ) public {
       hashMap[msg.sender].vaccineSlots[vaccineType] = vaccineSlots;
       hashMap[msg.sender].vaccineHash[vaccineType]  = keccak256(abi.encodePacked(hashMap[msg.sender].name, hashMap[msg.sender].gender, vaccineType, block.timestamp));
       emit hashGenertaed( hashMap[msg.sender].vaccineHash[vaccineType]);

    }


    function getVaccineRecords(uint8 id) public view returns(bytes32){
        return hashMap[msg.sender].vaccineHash[id];
    
    }
}
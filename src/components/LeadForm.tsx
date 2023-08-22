
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface LeadFormProps {
  onSubmit: (leadData: LeadDetails) => void;
}

interface LeadDetails {
  // Define the fields for lead details here
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [leadData, setLeadData] = useState<LeadDetails>({
    // Initialize the lead details fields here
  });

  const handleInputChange = (field: keyof LeadDetails, value: string) => {
    setLeadData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform validation on leadData fields here
    if (/* validation condition */) {
      Alert.alert('Validation Error', 'Please fill in all required fields');
      return;
    }

    onSubmit(leadData);
  };

  return (
    <View>
      <TextInput
        placeholder="Lead Name"
        value={leadData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        placeholder="Lead Email"
        value={leadData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      {/* Add more input fields for other lead details */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default LeadForm;
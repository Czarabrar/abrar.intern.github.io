import React,{useState} from 'react';
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native';
const FAQs = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqData = [
      {
        question: 'What is SWMS',
        answer: 'SWMS can automatically control the flow of water into the tank . Once the tank reaches a certain level,the value shuts off the incoming water supply,preventing overflow',
      },
      {
        question: 'How to add new task?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ex id sapien ullamcorper, quis auctor urna congue. Pellentesque vel justo a felis tincidunt cursus.',
      },
      {
        question: 'How is it work?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ex id sapien ullamcorper, quis auctor urna congue. Pellentesque vel justo a felis tincidunt cursus.',
      },
      {
        question: 'What is the advantages of SWMS',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ex id sapien ullamcorper, quis auctor urna congue. Pellentesque vel justo a felis tincidunt cursus.',
      },
      {
        question: 'How many tanks needed to be added',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ex id sapien ullamcorper, quis auctor urna congue. Pellentesque vel justo a felis tincidunt cursus.',
      },
    ];
  
    const handleQuestionPress = (index) => {
      if (selectedQuestion === index) {
        setSelectedQuestion(null);
      } else {
        setSelectedQuestion(index);
      }
    };
  

    return (

        <View style={styles.container}>
        <TouchableOpacity onPress={() => handleQuestionPress(0)} style={styles.faqItem}>
          <Text style={styles.question}>{faqData[0].question}</Text>
          {selectedQuestion === 0 && <Text style={styles.answer}>{faqData[0].answer}</Text>}
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleQuestionPress(1)} style={styles.faqItem}>
          <Text style={styles.question}>{faqData[1].question}</Text>
          {selectedQuestion === 1 && <Text style={styles.answer}>{faqData[1].answer}</Text>}
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleQuestionPress(2)} style={styles.faqItem}>
          <Text style={styles.question}>{faqData[2].question}</Text>
          {selectedQuestion === 2 && <Text style={styles.answer}>{faqData[2].answer}</Text>}
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleQuestionPress(3)} style={styles.faqItem}>
          <Text style={styles.question}>{faqData[3].question}</Text>
          {selectedQuestion === 3 && <Text style={styles.answer}>{faqData[3].answer}</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleQuestionPress(4)} style={styles.faqItem}>
          <Text style={styles.question}>{faqData[4].question}</Text>
          {selectedQuestion === 4 && <Text style={styles.answer}>{faqData[4].answer}</Text>}
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    faqItem: {
      marginBottom: 20,
    },
    question: {
      fontSize: 20,
      fontFamily:'Poppins-Regular',
      fontWeight: 'bold',
      color: '#0A2B3D',
      marginBottom:10,
      borderBottomWidth:0.3,
    },
    answer: {
      marginTop: 5,
      fontFamily:'Poppins-Regular',
      fontSize:18,
      color: 'grey',
    },
  });

export default FAQs;
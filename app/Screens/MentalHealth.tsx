import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function MentalHealth() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mental Health</Text>
      <Text style={styles.subtitle}>Understanding Mental Health</Text>
      <Text style={styles.paragraph}>
        Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.
      </Text>

      <Text style={styles.subtitle}>Why is Mental Health Important?</Text>
      <Text style={styles.paragraph}>
        Good mental health is more than just the absence of mental illness. It means you are in a state of well-being where you feel good and function well in the world. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
      </Text>

      <Text style={styles.subtitle}>Tips for Maintaining Mental Health</Text>
      <Text style={styles.paragraph}>
        - **Stay Active**: Regular physical activity can help reduce anxiety and depression.
      </Text>
      <Text style={styles.paragraph}>
        - **Connect with Others**: Building strong, positive relationships can help you cope with stress.
      </Text>
      <Text style={styles.paragraph}>
        - **Practice Mindfulness**: Mindfulness techniques, such as meditation and deep breathing, can help you stay grounded.
      </Text>
      <Text style={styles.paragraph}>
        - **Seek Help When Needed**: Don’t hesitate to reach out to a mental health professional if you’re feeling overwhelmed.
      </Text>

      <Text style={styles.subtitle}>Resources</Text>
      <Text style={styles.paragraph}>
        - **National Suicide Prevention Lifeline**: 1-800-273-TALK (8255)
      </Text>
      <Text style={styles.paragraph}>
        - **Crisis Text Line**: Text "HELLO" to 741741
      </Text>
      <Text style={styles.paragraph}>
        - **Mental Health America**: Visit www.mhanational.org for resources and support.
      </Text>

      <Text style={styles.subtitle}>Remember</Text>
      <Text style={styles.paragraph}>
        Taking care of your mental health is just as important as taking care of your physical health. If you or someone you know is struggling, reach out for help.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});
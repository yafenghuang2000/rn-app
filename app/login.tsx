import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      // 可以添加提示
      return;
    }
    if (!isAgreed) {
      // 可以添加提示：请同意用户协议
      return;
    }
    
    try {
      // 这里应该是实际的登录API调用
      // 模拟登录成功，获取token
      const mockToken = 'mock-token-' + Date.now();
      
      // 保存token到安全存储
      await SecureStore.setItemAsync('userToken', mockToken);
      
      // 跳转到首页
      router.replace('/(tabs)');
    } catch (error) {
      console.error('登录失败:', error);
      // 这里可以添加错误提示
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          {/* 返回按钮和帮助按钮 */}
          <View style={styles.header}>
            <TouchableOpacity>
              {/* <MaterialCommunityIcons name="arrow-left" size={24} color="#333" /> */}
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.helpText}>帮助</Text>
            </TouchableOpacity>
          </View>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="alpha-m-box" size={80} color="#ff6700" />
          </View>

          {/* 输入表单 */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="小米账号/手机号/邮箱"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                enablesReturnKeyAutomatically
                clearButtonMode="while-editing"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="密码"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                enablesReturnKeyAutomatically
                clearButtonMode="while-editing"
                onSubmitEditing={handleLogin}
              />
            </View>

            {/* 用户协议 */}
            <View style={styles.agreementContainer}>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => setIsAgreed(!isAgreed)}
              >
                <MaterialCommunityIcons 
                  name={isAgreed ? "checkbox-marked" : "checkbox-blank-outline"} 
                  size={20} 
                  color={isAgreed ? "#ff6700" : "#999"} 
                />
              </TouchableOpacity>
              <Text style={styles.agreementText}>
                已阅读并同意
                <Text style={styles.linkText}>《小米商城用户协议》</Text>
                <Text style={styles.linkText}>《小米商城隐私政策》</Text>
                <Text style={styles.linkText}>《小米账号用户协议》</Text>
                <Text style={styles.linkText}>《小米账号隐私政策》</Text>
              </Text>
            </View>

            {/* 登录按钮 */}
            <TouchableOpacity 
              style={[styles.loginButton, (!username || !password || !isAgreed) && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={!username || !password || !isAgreed}
            >
              <Text style={styles.loginButtonText}>登录</Text>
            </TouchableOpacity>

            {/* 其他选项 */}
            <View style={styles.optionsContainer}>
              <TouchableOpacity>
                <Text style={styles.optionText}>忘记密码</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.optionText}>验证码登录</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 其他登录方式 */}
          <View style={styles.otherLoginContainer}>
            <Text style={styles.otherLoginText}>其他方式登录</Text>
            <View style={styles.otherLoginButtons}>
              <TouchableOpacity style={styles.otherLoginButton}>
                <MaterialCommunityIcons name="wechat" size={32} color="#00c800" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.otherLoginButton}>
                <MaterialCommunityIcons name="qqchat" size={32} color="#0084ff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.otherLoginButton}>
                <MaterialCommunityIcons name="apple" size={32} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  helpText: {
    fontSize: 16,
    color: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    height: 48,
    fontSize: 16,
    color: '#333',
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  checkbox: {
    marginRight: 8,
    marginTop: 2,
  },
  agreementText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  linkText: {
    color: '#ff6700',
  },
  loginButton: {
    backgroundColor: '#ff6700',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loginButtonDisabled: {
    backgroundColor: '#ffd0b0',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  optionText: {
    color: '#666',
    fontSize: 14,
  },
  otherLoginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  otherLoginText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginBottom: 20,
  },
  otherLoginButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  otherLoginButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
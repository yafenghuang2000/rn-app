import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await SecureStore.getItemAsync('userToken');
      if (!token) {
        // 如果没有token，跳转到登录页
        router.replace('/login');
      }
    } catch (error) {
      console.error('验证token失败:', error);
      router.replace('/login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="alpha-m-box" size={28} color="#ff6700" />
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>首页</Text>
          <Text style={styles.headerSubTitle}>国补</Text>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <MaterialCommunityIcons name="calendar-check" size={24} color="#ff6700" />
          <Text style={styles.signInText}>签到</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* 搜索栏 */}
      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchText}>搜索</Text>
        <Ionicons name="scan-outline" size={20} color="#999" style={styles.scanIcon} />
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {/* 轮播图 */}
        <View style={styles.banner}>
          <Image 
            source={{ uri: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392e4f3b678e0b1b23afe.jpg?w=2452&h=920' }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.newTag}>
            <Text style={styles.newTagText}>新品</Text>
          </View>
        </View>

        {/* 功能区第一行 */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLinkItem}>
            <View style={[styles.quickLinkIcon, { backgroundColor: '#ffe7d3' }]}>
              <MaterialCommunityIcons name="new-box" size={24} color="#ff6700" />
            </View>
            <Text style={styles.quickLinkText}>小米上新</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkItem}>
            <View style={[styles.quickLinkIcon, { backgroundColor: '#fff5e0' }]}>
              <MaterialCommunityIcons name="hand-coin" size={24} color="#ffa000" />
            </View>
            <Text style={styles.quickLinkText}>小米众筹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkItem}>
            <View style={[styles.quickLinkIcon, { backgroundColor: '#e8f5ff' }]}>
              <MaterialCommunityIcons name="newspaper-variant" size={24} color="#0084ff" />
            </View>
            <Text style={styles.quickLinkText}>小米发布</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkItem}>
            <View style={[styles.quickLinkIcon, { backgroundColor: '#fff0f0' }]}>
              <MaterialCommunityIcons name="video" size={24} color="#ff4d4f" />
            </View>
            <Text style={styles.quickLinkText}>小米直播</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkItem}>
            <View style={[styles.quickLinkIcon, { backgroundColor: '#e6ffe6' }]}>
              <MaterialCommunityIcons name="cash-multiple" size={24} color="#52c41a" />
            </View>
            <Text style={styles.quickLinkText}>国家补贴</Text>
          </TouchableOpacity>
        </View>

        {/* 产品分类 */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="glasses" size={28} color="#333" />
            </View>
            <Text style={styles.categoryText}>智能穿戴</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="laptop" size={28} color="#333" />
            </View>
            <Text style={styles.categoryText}>电脑/平板</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="cellphone" size={28} color="#333" />
            </View>
            <Text style={styles.categoryText}>手机</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="television" size={28} color="#333" />
            </View>
            <Text style={styles.categoryText}>电视</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="air-conditioner" size={28} color="#333" />
            </View>
            <Text style={styles.categoryText}>空调/洗衣机</Text>
          </TouchableOpacity>
        </View>

        {/* 营销活动区 */}
        <View style={styles.promotions}>
          <View style={styles.promotionCard}>
            <View style={styles.promotionHeader}>
              <Text style={styles.promotionTitle}>手机国补专场</Text>
              <Text style={styles.promotionSubtitle}>国补至高优惠500元 {`>`}</Text>
            </View>
            <View style={styles.promotionProducts}>
              <Image 
                source={{ uri: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b72825e0a4e0c3ece26462c5a4c37a54.png?thumb=1&w=400&h=400' }}
                style={styles.promotionImage}
              />
            </View>
          </View>
          <View style={styles.promotionSmallCards}>
            <View style={styles.promotionSmallCard}>
              <Text style={styles.smallCardTitle}>办公焕新季</Text>
              <Text style={styles.smallCardSubtitle}>国补至高优惠20%</Text>
              <Image 
                source={{ uri: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b72825e0a4e0c3ece26462c5a4c37a54.png?thumb=1&w=200&h=200' }}
                style={styles.smallCardImage}
              />
            </View>
            <View style={styles.promotionSmallCard}>
              <Text style={styles.smallCardTitle}>春日出行季</Text>
              <Text style={styles.smallCardSubtitle}>全场低至9.99元起</Text>
              <Image 
                source={{ uri: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b72825e0a4e0c3ece26462c5a4c37a54.png?thumb=1&w=200&h=200' }}
                style={styles.smallCardImage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  headerSubTitle: {
    fontSize: 16,
    color: '#999',
    marginLeft: 20,
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  signInText: {
    fontSize: 12,
    color: '#ff6700',
    marginLeft: 4,
  },
  messageButton: {
    padding: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#999',
  },
  scanIcon: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    height: 180,
    backgroundColor: '#fff',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  newTag: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#ffe7d3',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  newTagText: {
    color: '#ff6700',
    fontSize: 12,
  },
  quickLinks: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginTop: 8,
  },
  quickLinkItem: {
    flex: 1,
    alignItems: 'center',
  },
  quickLinkIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickLinkText: {
    fontSize: 12,
    color: '#333',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginTop: 8,
  },
  categoryItem: {
    width: '20%',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
  },
  promotions: {
    padding: 12,
    marginTop: 8,
  },
  promotionCard: {
    backgroundColor: '#00c37e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  promotionHeader: {
    marginBottom: 12,
  },
  promotionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  promotionSubtitle: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  promotionProducts: {
    flexDirection: 'row',
  },
  promotionImage: {
    width: 100,
    height: 100,
    marginRight: 12,
  },
  promotionSmallCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promotionSmallCard: {
    width: (width - 36) / 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  smallCardTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  smallCardSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  smallCardImage: {
    width: 80,
    height: 80,
    marginTop: 12,
  },
});


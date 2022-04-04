# GitHub_Search_Repos
<br>


[https://tw001chenyi.github.io/GitHub_Search_Repos/](https://tw001chenyi.github.io/GitHub_Search_Repos/)<br>
作者:TW001ChenYI<br>

![image](asset/View.gif)

本專案是利用React框架寫出一個提供使用者查詢GitHub的Repository，查詢後會顯示前10筆Repostories，並利用Windows Scroll監聽螢幕到底部時，再次請求API，顯示接下來10筆Repostories，點擊Repository就會跳轉該Repository的詳細內容。

## Setup    
### 下載本專案
    git clone https://github.com/TW001ChenYI/GitHub_Search_Repos.git
### 進入本專案資料夾
    cd GitHub_Search_Repos
### 下載本專案的套件
    npm install

## Start React
    npm start

## Open Page
[http://localhost:3000/GitHub_Search_Repos](http://localhost:3000/GitHub_Search_Repos)

![image](asset/Search.png)
## reasult
1. 點擊查詢時，輸入匡不能為空，否則會跳出提醒
   ![imges](asset/result1.png)
2. 顯示repositories
   ![imges](asset/result2.png)
3. 此使用者但沒有repository
   ![imges](asset/result3.png)
4. 查無此使用者
   ![imges](asset/result4.png)
5. 該Repostory中description為空則顯示No description, website, or topics provided.
   ![imges](ass/../asset/result5.png)

# 關於本專案
## 開發環境
1. MacBook Pro (13-inch, M1, 2020)(macOS BigSur 11.4)<br>
1. Vs Code<br>
2. npm 6.14.15

## 框架
1. React<br>
1. GitHub Page<br>

# 關於我
如有發現錯誤或者需要改進的地方，可以向我聯絡：[D10816104@gs.takming.edu.tw](mailto:D10816104@gs.takming.edu.tw)
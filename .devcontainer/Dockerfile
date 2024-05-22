# ベースイメージとしてNode.jsを使用
FROM node:18.17.0

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Next.jsアプリケーションを起動
CMD ["npm", "run", "dev"]

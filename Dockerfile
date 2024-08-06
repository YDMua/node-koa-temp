
FROM node:20.16.0
# 设置维护者信息 
LABEL maintainer="edon"
# 防止中文打印信息显示乱码
ENV LANG="C.UTF-8"

WORKDIR /app/server

# 将项目中的 package.json 文件拷贝到容器中的 app/server 
COPY ./package.json /app/server
COPY . /app/server
RUN  npm install -g pnpm@latest --registry=https://registry.npmmirror.com && pnpm install
RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "start:build"]
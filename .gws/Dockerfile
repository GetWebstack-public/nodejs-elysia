FROM oven/bun:1-alpine
WORKDIR /app
COPY package.json ./
RUN bun install
COPY . .
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["bun", "--watch", "src/index.ts"]


## 1. Tạo project

```bash
npm create vite@latest my_app -- --template react-ts

cd my_app
npm install
```

---

## 2. Cài thư viện cần thiết

```bash
npm install axios

npm install react-router-dom

npm install -D prettier
```

---

## 3. Chức năng từng thư viện

| Thư viện         | Chức năng                 |
| ---------------- | ------------------------- |
| TypeScript       | Hỗ trợ viết TypeScript    |
| Axios            | Gọi API                   |
| React Router DOM | Điều hướng giữa các trang |
| Prettier         | Tự động format code       |

---

## 4. Cấu trúc project

```text
movie-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── constants/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## 5. Chức năng các thư mục

| Thư mục    | Chức năng                     |
| ---------- | ----------------------------- |
| assets     | Hình ảnh, icon, CSS           |
| components | Component tái sử dụng         |
| pages      | Các trang chính               |
| routes     | Cấu hình React Router         |
| services   | Gọi API bằng Axios            |
| utils      | Hàm tiện ích                  |
| constants  | Hằng số, cấu hình             |
| types      | Interface và TypeScript Types |

---

## 6. Tạo thư mục src

```bash
cd src

mkdir assets
mkdir components
mkdir pages
mkdir routes
mkdir services
mkdir utils
mkdir constants
mkdir types
```

---

## 7. Tự động format code

Cài extension:

```text
Prettier - Code formatter
```

Thêm vào VS Code Settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Format toàn bộ project:

```bash
npx prettier --write .
```

---

## 8. Chạy project

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

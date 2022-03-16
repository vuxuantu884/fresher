# Base React Web V1

Base Web sử dụng NextJS, ReactJS, Redux

## Getting started
-   Clone code
-   npm install
-   copy .env.example to .env
-   npm run dev

## Structure

<pre>
<b>/src</b>
&emsp;<b>|__handlers</b>
&emsp;&emsp;&emsp;&emsp;|<b>__auth</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__auth.hooks.ts
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__auth.services.ts
&emsp;<b>|__languages</b>
&emsp;&emsp;&emsp;&emsp;|<b>__en</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__common.json
&emsp;<b>|__layouts</b>
&emsp;&emsp;&emsp;&emsp;|<b>__components</b>
&emsp;&emsp;&emsp;&emsp;|<b>__styles</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__footer.module.scss
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__header.module.scss
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__main.module.scss
&emsp;&emsp;&emsp;&emsp;|__FooterLayout.tsx
&emsp;&emsp;&emsp;&emsp;|__HeaderLayout.tsx
&emsp;&emsp;&emsp;&emsp;|__MainLayout.tsx
&emsp;<b>|__libraries</b>
&emsp;<b>|__pages</b>
&emsp;&emsp;&emsp;&emsp;|<b>__home</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|<b>__components</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__HomeBanner.tsx
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|<b>__styles</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__banner.module.scss
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__home.module.scss
&emsp;&emsp;&emsp;&emsp;|___app.tsx
&emsp;&emsp;&emsp;&emsp;|__index.tsx
&emsp;<b>|__store</b>
&emsp;&emsp;&emsp;&emsp;|<b>__reducers</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__user.ts
&emsp;&emsp;&emsp;&emsp;|__index.tsx
&emsp;<b>|__styles</b>
&emsp;&emsp;&emsp;&emsp;|__globals.css
&emsp;<b>|__types</b>
&emsp;&emsp;&emsp;&emsp;|__auth.types.ts
&emsp;<b>|__utils</b>
&emsp;&emsp;&emsp;&emsp;|<b>__api</b>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__api.types.ts
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|__api.utils.ts
&emsp;&emsp;&emsp;&emsp;|__common.utils.ts
</pre>

- **handlers**: Là nơi xử lý logic chính của 1 page, chứa phần custom hook và service api.
    - **auth.hooks.ts**: Là nơi định nghĩa function custom hook.
    - **auth.services.ts**: Là nơi định nghĩa các function gọi api.
- **languages**: Là nơi chứa phần ngôn ngữ của dự án.
- **layouts**: Là nơi chứa layout của dự án.
- **libraries**: Là nơi chứa các components dùng chung của dự án.
- **pages**: Là nơi chứa các page của dự án.
    - **home**: Là phần code của trang chủ.
        - **components**: Là nơi chứa các components sử dụng cho trang chủ.
        - **styles**: Là nơi chứa các file style module sử dụng cho trang chủ.
- **store**: Là nơi quản lý global state, sử dụng redux toolkit.
    - **reducers**: Là nơi khai báo reducer cho từng đối tượng.
    - **index.ts**: Là nơi cài đặt store.
- **types**: Là nơi chứa global styles.
- **utils**: Là nơi khai báo các common function sử dụng chung cho dự án.
    - **api**: Là nơi cấu hình axios dùng để kết nối với api từ BE.
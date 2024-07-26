/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: process.env.NODE_ENV === 'production'
            ? 'https://gajumaru0403.com'
            : 'http://localhost:3000' }, // 本番環境では特定のオリジンに制限することをお勧めします
            { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
            { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
          ],
        },
      ];
    },
    // 他の既存の設定がある場合はここに追加
  };
  
  export default nextConfig;
// app/components/section.tsx
export default function Section({
  title,
  subTitle,
  children,
  className = '', // デフォルト値を空文字列に設定
  style, // スタイルプロパティを追加
}: {
  title: string
  subTitle: string
  children: React.ReactNode
  className?: string
  style: React.CSSProperties
}) {
  return (
    <section className={`py-20 ${className}`} style={style}>
      <div className="text-center space-y-6 mb-10">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-muted-forground">{subTitle}</p>
      </div>

      {children}
    </section>
  )
}
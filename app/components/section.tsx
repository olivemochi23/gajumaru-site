export default function Section({
  title,
  subTitle,
  children,
  className = '', // デフォルト値を空文字列に設定
}: {
  title: string
  subTitle: string
  children: React.ReactNode
  className?: string // オプショナルなプロパティとして追加
}) {
return (
  <section className={`py-20 container ${className}`}>
    <div className="text-center space-y-6 mb-10">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-muted-forground">{subTitle}</p>
    </div>

    {children}
  </section>
)
}
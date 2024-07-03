
export type iTestTitle = {
  title?: string;
}

export const TestTitle = ({ title }: iTestTitle) => {
  return <h1>{title}</h1>
}
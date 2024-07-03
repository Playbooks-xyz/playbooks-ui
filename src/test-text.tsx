
export type iTestText = {
  text?: string;
}

export const TestText = ({ text }: iTestText) => {
  return <p>{text}</p>
}
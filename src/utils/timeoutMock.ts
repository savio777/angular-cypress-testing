export default async function timeoutMock<T>(
  url: string,
  options?: RequestInit,
  timeout = 9000
): Promise<T> {
  const response = await Promise.all([
    fetch(url, options),
    new Promise((res) => setTimeout(() => res(new Error('timeout')), timeout)),
  ]);

  const responseFecth = response[0] as unknown as Promise<Response>;

  return (await responseFecth).json();
}

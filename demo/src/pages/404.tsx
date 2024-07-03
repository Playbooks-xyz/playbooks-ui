const NotFound = () => {
  // Render
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24`}>
      <div className='space-y-4'>
        <h4>404 | Not Found</h4>
        <a className='block text-white underline' href='/'>Back to home</a>
      </div>
    </main>
  );
}

export default NotFound

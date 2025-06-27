export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Logga in</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-post"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Lösenord"
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Logga in
          </button>
        </form>
      </div>
    </main>
  );
}

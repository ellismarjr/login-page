import logo from '../../../assets/images/logo.svg';

export const Login = () => {
  return (
    <div className="bg-blue-50 w-screen h-screen flex items-center justify-center">
      <div className="w-[480px] min-h-[404px] rounded-xl px-12 py-8 bg-white">
        <header className="flex justify-center mb-4">
          <img src={logo} alt="Alxarify" />
        </header>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-500 text-sm" htmlFor="email">Email</label>
              <input className="w-full h-10 bg-blue-50 text-zinc-600 rounded-lg p-3"
                type="text"
                name='email'
                placeholder='Digite seu email'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-blue-500 text-sm" htmlFor="password">Senha</label>
              <input className="w-full h-10 bg-blue-50 text-zinc-600 rounded-lg p-3"
                type="password"
                name='password'
                placeholder='Digite sua senha'
              />
            </div>
          </div>

          <button className="w-full h-10 bg-blue-900 rounded-md text-white font-bold">ACESSAR</button>
        </form>
      </div>
    </div>
  )
}
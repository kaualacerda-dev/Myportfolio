import { useState } from "react";
import estoqueImage from "../../assets/img/Alay-Admin/Estoque.png";
import loginImage from "../../assets/img/Alay-Admin/login.png";
import registroImage from "../../assets/img/Alay-Admin/Cadatro.png";
import HomeImage from "../../assets/img/Alay-Admin/Home.png";

const screens = [
  {
    title: "Login",
    description: "Tela de acesso administrativo para entrada no sistema.",
    image: loginImage,
  },
  {
    title: "Home",
    description:
      "Página principal do painel, com uma visão geral da loja. Nela é possível visualizar metas, produtos em estoque e outras informações relevantes.",
    image: HomeImage,
  },
  {
    title: "Estoque",
    description:
      "Painel para acompanhar produtos, quantidades disponíveis e controle interno.",
    image: estoqueImage,
  },
  {
    title: "Cadastro",
    description:
      "Formulário para cadastro de produtos. No momento, o status do catálogo ainda não está funcional. Todos os dados são obrigatórios para a criação do produto.",
    image: registroImage,
  },
];

function Adm() {
  const [focusedScreen, setFocusedScreen] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-[#07030d] text-violet-50">
      <section className="flex flex-col bg-[radial-gradient(circle_at_top,_rgba(109,40,217,0.18),_transparent_34%),linear-gradient(180deg,_#07030d_0%,_#0d0718_55%,_#140a22_100%)] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <a
            href="#/"
            className="flex w-fit items-center justify-center rounded-full border border-violet-500/20 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-violet-300/40 hover:text-violet-200"
          >
            Voltar
          </a>

          <div className="mt-10 flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
              Projeto
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Painel administrativo
            </h1>
            <p className="text-left mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
              O projeto foi desenvolvido com Angular e faz parte de um conjunto
              integrado com backend e front-end. A proposta do painel
              administrativo é permitir a criação de produtos, a visualização do
              estoque e a gestão de vendas. No momento, as funcionalidades de
              visualização de vendas, pedidos e clientes cadastrados ainda não
              estão disponíveis; elas foram incluídas na interface como previsão
              para futuras implementações. Na versão em produção, não é possível
              realizar cadastro, pois o login é restrito. Já no ambiente de
              desenvolvimento, o acesso é livre.
              <br />
              <a
                href="https://alay-admin.onrender.com/"
                className="text-yellow-400"
              >
                Link do projeto em produção
              </a>
            </p>
            <a
              href="https://github.com/kaualacerda-dev/Alay-Admin"
              className="w-[190px] text-purple-500"
            >
              Link do projeto no GitHub
            </a>
            <a href="https://github.com/kaualacerda-dev/Alay-Backend"
              className="w-[190px] text-purple-500 "
            >
              Backend do projeto
            </a>
          </div>

          <p className="mt-10 text-sm leading-7 text-zinc-300 sm:text-base">
            Clique nas imagens para ampliá-las e visualizar melhor os detalhes.
          </p>

          <div className="mt-5 flex flex-col gap-5">
            {screens.map((screen) => (
              <article
                key={screen.title}
                className="flex flex-col overflow-hidden rounded-[2rem] border border-violet-500/10 bg-[#12091d]"
              >
                <div className="flex w-full justify-center bg-[#0f0818] px-4 py-4 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setFocusedScreen(screen)}
                    className="w-full max-w-3xl cursor-zoom-in"
                    aria-label={`Ampliar tela ${screen.title} do painel administrativo`}
                  >
                    <img
                      src={screen.image}
                      alt={`Tela ${screen.title} do painel administrativo`}
                      className="w-full rounded-[1.25rem] object-cover"
                    />
                  </button>
                </div>

                <div className="flex flex-col px-5 py-5 sm:px-6">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    {screen.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {screen.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {focusedScreen && (
        <button
          type="button"
          onClick={() => setFocusedScreen(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-8"
          aria-label={`Fechar tela ${focusedScreen.title} ampliada`}
        >
          <img
            src={focusedScreen.image}
            alt={`Tela ${focusedScreen.title} do painel administrativo ampliada`}
            className="max-h-[90vh] w-full max-w-6xl rounded-[1.25rem] object-contain"
          />
        </button>
      )}
    </main>
  );
}

export default Adm;

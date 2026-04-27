import estoqueImage from "../../assets/img/estoque.png";
import loginImage from "../../assets/img/login.png";
import registroImage from "../../assets/img/registro.png";
import visaoGeralImage from "../../assets/img/visaoGeral.png";

const screens = [
  {
    title: "Login",
    description: "Tela de acesso administrativo para entrada no sistema.",
    image: loginImage,
  },
  {
    title: "Registro",
    description:
      "Area visual do projeto com estrutura organizada e foco em usabilidade. Essa tela em especifico não tem utilidade, foi feita pensando em adições futuras, as funcionalidades dela não estão realmente funcionando.",
    image: visaoGeralImage,
  },
  {
    title: "Estoque",
    description:
      "Painel para acompanhar produtos, quantidades e controle interno.",
    image: estoqueImage,
  },
  {
    title: "Cadastro",
    description:
      "Formulario para cadastrar produtos, os status do catálogo ainda não esta funcionando. Todos os dados são obrigatórios para a criação do produto.",
    image: registroImage,
  },
];

function Adm() {
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
              O projeto foi feito com Angular e é um conjunto, possui ligação
              com um backend e um front-end. A ideia é utilizar o painel
              administrativo para criação de produtos, vizualização de estoque,
              e gestão de vendas. Por enquanto a função de visualizar vendas,
              pedidos e clientes cadastrados não estão disponiveis, foram
              adicionadas no projeto para complementar e com uma possibilidade
              de adição mais para o futuro. No painel você não consegue fazer
              registro pois o login é restrito, pelo menos na versão em prod, já
              em dev seu acesso é livre.
              <br />
              <a
                href="https://alay-admin.onrender.com/"
                className="text-yellow-400"
              >
                Link do projeto em Prod
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

          <div className="mt-12 flex flex-col gap-5">
            {screens.map((screen) => (
              <article
                key={screen.title}
                className="flex flex-col overflow-hidden rounded-[2rem] border border-violet-500/10 bg-[#12091d]"
              >
                <div className="flex w-full justify-center bg-[#0f0818] px-4 py-4 sm:px-6">
                  <img
                    src={screen.image}
                    alt={`Tela ${screen.title} do painel administrativo`}
                    className="w-full max-w-3xl rounded-[1.25rem] object-cover"
                  />
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
    </main>
  );
}

export default Adm;

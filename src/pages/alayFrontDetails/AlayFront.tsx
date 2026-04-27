import frontCartImage from "../../assets/img/Alay-front/frontCart.png";
import frontHomeImage from "../../assets/img/Alay-front/frontHome.png";
import frontHomeProductsImage from "../../assets/img/Alay-front/frontHomeProducts.png";
import frontLoginImage from "../../assets/img/Alay-front/frontLogin.png";
import frontSearchImage from "../../assets/img/Alay-front/frontSearch.png";
import frontProductDetails from "../../assets/img/Alay-front/frontProductDetails.png";

const screens = [
  {
    title: "Home",
    description: "Pagina de apresentação da marca.",
    image: frontHomeImage,
  },
  {
    title: "Produtos",
    description:
      "Sessão de produtos na pagina home, com filtros de acordo com a categoria do produto.",
    image: frontHomeProductsImage,
  },
  {
    title: "Busca",
    description:
      "Sistema de procura funcional de acordo com o nome dos produtos.",
    image: frontSearchImage,
  },
  {
    title: "Detalhes dos produtos",
    description:
      "Pagina de detalhes, para visualizar melhor as informações do produto, com botão para adicionar ao carrinho.",
    image: frontProductDetails,
  },
  {
    title: "Carrinho",
    description:
      "Carrinho com a quantidade de produto escolhida e com total do valor somando todos os produtos.",
    image: frontCartImage,
  },
  {
    title: "Login",
    description:
      "Pagina de login, para logar caso tenha conta, com botão direcional para registro caso não tenha conta.",
    image: frontLoginImage,
  },
];

function AlayFront() {
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
              Alay (Front-end da loja)
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
              Projeto feito em conjunto com o{" "}
              <a
                href="https://github.com/kaualacerda-dev/Alay-Admin"
                className="text-blue-400"
              >
                painel adiminstrativo
              </a>
              .<br /> Os dois utilizam o mesmo{" "}
              <a
                href="https://github.com/kaualacerda-dev/Alay-Backend"
                className="text-blue-400"
              >
                backend.
              </a>
              <br />
              O projeto foi criado com Next.js e foi feito para exibir as informações dos produtos criado pelo
              painel, com foco na compra e acesso de usuários. 
            </p>
            <p className="text-red-500">
              A marca Alay foi apenas uma inspiração pessoal, não possui vinculo com uma empresa real, pelo menos não do meu conhecimento!
            </p>
            <a
              href="https://github.com/kaualacerda-dev/Alay-front"
              className="mt-3 w-fit text-purple-500"
            >
              Link do projeto no GitHub
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
                    alt={`Tela ${screen.title} do projeto Alay front-end da loja`}
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

export default AlayFront;

const posts = [
    {
        id: 1,
        title: 'Jesus deseja nos tornar seus discípulos',
        href: '#',
        description:
            'Se alguém quer ser meu discípulo, siga-me, pois meus servos devem estar onde eu estou. E o Pai honrará quem me servir. João 12:26.',
        date: 'Out 29, 2023',
        datetime: '2023-10-29',
        category: { title: 'Developer', href: '#' },
        author: {
            name: 'Mateus Rodrigues',
            role: 'CEO',
            href: '#',
            imageUrl: 'https://i.ibb.co/QNRY1fp/pf.jpg',
        },
    },
    {
        id: 2,
        title: 'Conversa com Jesus',
        href: '#',
        description:
            'Entender que sou dependente da vontade e escolha de Deus, me faz descansar em minhas decisões. Pois Tudo vai está nas mãos Dele. ',
        date: 'Nov 04, 2023',
        datetime: '2023-11-04',
        category: { title: 'Developer', href: '#' },
        author: {
            name: 'Mateus Rodrigues',
            role: 'CEO',
            href: '#',
            imageUrl: 'https://i.ibb.co/QNRY1fp/pf.jpg',
        },
    }
]

export default function Blog() {
    return (
        <main className="flex container flex-col min-h-screen items-center gap-10">
            <div className="bg-zinc-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Conhecendo Jesus</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-400">
                            Entenda quem é Jesus, e o que ele quer de nós.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-200">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

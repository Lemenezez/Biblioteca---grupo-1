import { IPublicacao } from "../interfaces/IPublicacao";
import { ItemAcervo } from "./ItemAcervo"; 

export abstract class Publicacao extends ItemAcervo {
    protected autor: string;
    protected anoPublicacao: number;
    public editora: string;

    constructor(props: IPublicacao, editora: string) {
        super(props);
        this.autor = props.autor;
        this.anoPublicacao = props.anoPublicacao;
        this.editora = editora;
    }

    abstract getInfo(): string;

    atualizarInformacoes(novosDados: { titulo?: string; anoPublicacao?: number; autor?: string; editora?: string }): void {
        if (novosDados.titulo) this.titulo = novosDados.titulo;
        if (novosDados.anoPublicacao) this.anoPublicacao = novosDados.anoPublicacao;
        if (novosDados.autor) this.autor = novosDados.autor;
        if (novosDados.editora) this.editora = novosDados.editora;
        console.log(`Informações da publicação ${this.titulo} foram atualizadas.`);
    }
}

export class Livro extends Publicacao {
    public isbn: string;

    constructor(props: IPublicacao, editora: string, isbn: string) {
        super(props, editora);
        this.isbn = isbn;
    }

    getInfo(): string {
        return `Livro: ${this.titulo}, ISBN: ${this.isbn}, Autor: ${this.autor}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}`;
    }

    atualizarInformacoes(novosDados: { titulo?: string; anoPublicacao?: number; autor?: string; editora?: string; isbn?: string }): void {
        super.atualizarInformacoes(novosDados);
        if (novosDados.isbn) this.isbn = novosDados.isbn;
        console.log(`Informações do livro ${this.titulo} foram atualizadas.`);
    }
}
export class Revista extends Publicacao {
    public numeroEdicao: number;

    constructor(props: IPublicacao, editora: string, numeroEdicao: number) {
        super(props, editora);
        this.numeroEdicao = numeroEdicao;
    }

    getInfo(): string {
        return `Revista: ${this.titulo}, Edição: ${this.numeroEdicao}, Autor: ${this.autor}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}`;
    }

    atualizarInformacoes(novosDados: { titulo?: string; anoPublicacao?: number; autor?: string; editora?: string; numeroEdicao?: number }): void {
        super.atualizarInformacoes(novosDados);
        if (novosDados.numeroEdicao) this.numeroEdicao = novosDados.numeroEdicao;
        console.log(`Informações da revista ${this.titulo} foram atualizadas.`);
    }
}


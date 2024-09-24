export type PontoInterrese = {
    id: number;
    fotos: string;
    descricao: string;
    nome: string;
    nota: number;
    latitude: string,
    longitude: string,
    categoria: string,
    dataDeCriacao: string,
    telefone: string
    state: boolean
  };
 
 
  export async function getPontoInterrese(sortBy: string) {
    const headers = new Headers();
    const res = await fetch(`http://localhost:8080/brazu/pontos?sort=${sortBy}`, {
      method: 'GET',
      headers: headers
    });
    const pontoInterrese = await res.json();
    return pontoInterrese;
  }
  export async function getPontoInterreseFilter(category: string) {
    const headers = new Headers();
    const res = await fetch(`http://localhost:8080/brazu/pontos?categoria=${category}`, {
      method: 'GET',
      headers: headers
    });
    const pontoInterrese = await res.json();
    return pontoInterrese;
  }
 
  export async function getPontoInterreseSearch(search: string) {
    const headers = new Headers();
    const res = await fetch(`http://localhost:8080/brazu/pontos?search=${search}`, {
      method: 'GET',
      headers: headers
    });
    const pontoInterrese = await res.json();
    return pontoInterrese;
  }
 
 
  export async function getPontoInterreseById(id: number) {
    const headers = new Headers();
    const res = await fetch(`http://localhost:8080/brazu/pontos/${id}`,
      {
        method: 'GET',
        headers: headers
      }
    );
    const pontoInterrese = await res.json();
    return pontoInterrese;
 
  }
 
 
 
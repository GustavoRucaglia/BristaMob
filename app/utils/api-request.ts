
export type PontoInterrese = {
  id: number;
  fotos: string;
  descricao: string;
  nome: string;
  nota: number;
  latitude: string;
  longitude: string;
  categoria: string;
  dataDeCriacao: string;
  telefone: string;
  state: boolean;
  regiao: string;
};

const API = 'https://d201-2804-14d-32a0-4fdc-1c18-a789-f220-289a.ngrok-free.app';

const defaultHeaders = {
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json", 
};

export async function getPontoInterrese(sortBy: string): Promise<PontoInterrese[]> {
  const res = await fetch(`${API}/brazu/pontos?sort=${sortBy}`, {
      method: 'GET',
      headers: defaultHeaders,
  });

  if (!res.ok) {
      throw new Error(`Erro ao buscar pontos de interesse: ${res.statusText}`);
  }

  return await res.json();
}

export async function getPontoInterreseFilter(category: string): Promise<PontoInterrese[]> {
  const res = await fetch(`${API}/brazu/pontos?categoria=${category}`, {
      method: 'GET',
      headers: defaultHeaders,
  });

  if (!res.ok) {
      throw new Error(`Erro ao buscar pontos de interesse por categoria: ${res.statusText}`);
  }

  const pontoInterrese = await res.json();
  return pontoInterrese;
}

export async function getPontoInterreseFilterRegiao(regiao: string): Promise<PontoInterrese[]> {
  const res = await fetch(`${API}/brazu/pontos?regiao=${regiao}`, {
      method: 'GET',
      headers: defaultHeaders,
  });

  if (!res.ok) {
      throw new Error(`Erro ao buscar pontos de interesse por região: ${res.statusText}`);
  }

  return await res.json();
}

export async function getPontoInterreseSearch(search: string): Promise<PontoInterrese[]> {
  const res = await fetch(`${API}/brazu/pontos?search=${search}`, {
      method: 'GET',
      headers: defaultHeaders,
  });

  if (!res.ok) {
      throw new Error(`Erro ao buscar pontos de interesse por busca: ${res.statusText}`);
  }

  return await res.json();
}

export async function getPontoInterreseById(id: number): Promise<PontoInterrese> {
  const res = await fetch(`${API}/brazu/pontos/${id}`, {
      method: 'GET',
      headers: defaultHeaders,
  });

  if (!res.ok) {
      throw new Error(`Erro ao buscar ponto de interesse com ID ${id}: ${res.statusText}`);
  }

  return await res.json();
}

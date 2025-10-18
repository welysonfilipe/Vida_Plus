import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GestaoEstoque.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Button from "../components/Button";
import estoqueData from "../data/estoqueData.json";

const GestaoEstoque = () => {
  const navigate = useNavigate();

  const estoque = estoqueData.estoque;

  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("");

  const estoqueFiltrado = estoque.filter(item => {
    const matchBusca = item.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       item.id.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaFiltro === "" || item.categoria === categoriaFiltro;
    const matchStatus = statusFiltro === "" || item.status === statusFiltro;
    return matchBusca && matchCategoria && matchStatus;
  });

  return (
    <div className="gestao-estoque-container">
      <NavBarAdmin />
      
      <div className="gestao-content">
        <div className="gestao-header">
          <h1>Gestão de Estoque</h1>
          <Button 
            text="+ Novo Pedido"
            onClick={() => {}}
            className="button-novo"
          />
        </div>

        {/* Filtros */}
        <div className="filtros-section">
          <div className="filtro-busca">
            <input
              type="text"
              placeholder="🔍 Buscar por nome ou código do insumo..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="filtro-categoria">
            <select value={categoriaFiltro} onChange={(e) => setCategoriaFiltro(e.target.value)}>
              <option value="">Todas as Categorias</option>
              <option value="EPI">EPI</option>
              <option value="Higienização">Higienização</option>
              <option value="Material Descartável">Material Descartável</option>
              <option value="Curativos">Curativos</option>
              <option value="Medicamentos">Medicamentos</option>
              <option value="Equipamentos">Equipamentos</option>
              <option value="Soluções">Soluções</option>
            </select>
          </div>
          <div className="filtro-status">
            <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
              <option value="">Todos os Status</option>
              <option value="Disponível">Disponível</option>
              <option value="Estoque Baixo">Estoque Baixo</option>
              <option value="Crítico">Crítico</option>
            </select>
          </div>
        </div>

        {/* Tabela de Estoque */}
        <div className="tabela-wrapper">
          <table className="estoque-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome do Insumo</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Fornecedor</th>
                <th>Data Validade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {estoqueFiltrado.map(item => (
                <tr key={item.id}>
                  <td className="codigo-cell">{item.id}</td>
                  <td className="nome-cell">{item.nome}</td>
                  <td>{item.categoria}</td>
                  <td>
                    <span className="quantidade-info">
                      {item.quantidade} {item.unidade}
                    </span>
                  </td>
                  <td>{item.fornecedor}</td>
                  <td>{item.dataValidade}</td>
                  <td>
                    <span className={`status-badge status-${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestaoEstoque;
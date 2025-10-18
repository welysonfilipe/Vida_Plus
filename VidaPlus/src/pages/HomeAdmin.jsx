import "./HomeAdmin.css";
import estatisticasData from "../data/estatisticasData.json"
import atendimentosMesData from "../data/atendimentosMesData.json"
import atividadesRecetesData from "../data/atividadesRecentesData.json"
import alertasData from "../data/alertasData.json"
import NavBarAdmin from "../components/NavBarAdmin";

const HomeAdmin = () => {

  // Dados mockados
  const estatisticas = estatisticasData.estatisticas

  const atendimentosMes = atendimentosMesData.atendimentosMes

  const atividadesRecentes = atividadesRecetesData.atividadesRecentes

  const alertas = alertasData.alertas

  const maxConsultas = Math.max(...atendimentosMes.map(m => m.consultas));

  return (
    <div className="Home-admin-container">
      <NavBarAdmin />
      
      <div className="Home-admin-wrapper">
        <main className="Home-main-content">
          <div className="Home-header">
            <h1>Dashboard Administrativo</h1>
            <p className="Home-subtitle">Visão geral do sistema</p>
          </div>

          {/* Cards de Estatísticas */}
          <div className="stats-grid">
            {estatisticas.map(stat => (
              <div 
                key={stat.id} 
                className="stat-card clickable" 
                style={{ borderLeftColor: stat.cor }}
                onClick={() => navigate(stat.rota)}
              >
                <div className="stat-icon" style={{ backgroundColor: stat.cor + '20' }}>
                  {stat.icone}
                </div>
                <div className="stat-info">
                  <h3>{stat.valor}</h3>
                  <p>{stat.titulo}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gráfico e Alertas */}
          <div className="Home-grid">
            {/* Gráfico de Atendimentos */}
            <div className="Home-card">
              <h3 className="card-title">📊 Atendimentos por Mês</h3>
              <div className="chart-container">
                <div className="chart-bars">
                  {atendimentosMes.map((item, index) => (
                    <div key={index} className="chart-bar-wrapper">
                      <div 
                        className="chart-bar"
                        style={{ 
                          height: `${(item.consultas / maxConsultas) * 100}%`,
                          backgroundColor: '#3A5F6F'
                        }}
                      >
                        <span className="bar-value">{item.consultas}</span>
                      </div>
                      <span className="bar-label">{item.mes}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alertas e Notificações */}
            <div className="Home-card">
              <h3 className="card-title">⚠️ Alertas e Notificações</h3>
              <div className="alertas-container">
                {alertas.map(alerta => (
                  <div key={alerta.id} className={`alerta-item alerta-${alerta.urgencia}`}>
                    <div className="alerta-indicator"></div>
                    <div className="alerta-content">
                      <p>{alerta.mensagem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Atividades Recentes */}
          <div className="Home-card">
            <h3 className="card-title">📋 Últimas Atividades</h3>
            <div className="atividades-list">
              {atividadesRecentes.map(atividade => (
                <div key={atividade.id} className="atividade-item">
                  <div className="atividade-icon">{atividade.icone}</div>
                  <div className="atividade-info">
                    <h4>{atividade.tipo}</h4>
                    <p>{atividade.descricao}</p>
                  </div>
                  <div className="atividade-hora">{atividade.hora}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeAdmin;
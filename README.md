# Documentação de Especificações de Requisitos de Software SRS

## Sistema de Gestão de Quitanda (Quitanda MVC)

**Padrão Internacional:** ISO/IEC/IEEE 29148:2018
**Versão:** 1.0.0
**Data:** 2026-04-14
**Autor:** Larissa Vieira

---

## 1.Introdução

### 1.1 Propósito

Este documento descrve os requisitos do sistema **Quitanda MVC**, com o objetivo de:

* definir funcionalidade
* padronizar entendimentos entre os stakeholders
* servir como base para desenvolvimento e teste

---
### 1.2 Escopo

O Sistema permitirá: 

* Registro de entrada de produtos
* controle de estoque
* registro de vendas
* visualização dos históricos das movimentações

O Sistema será uma aplicação web frontend utilizando:

* HTML
* CSS
* Java Script
* Arquitetura MVC
* Estrutura POO

Objetivos:

---

### 1.3 Definições e Acrônimos

| Termos | Definições |
| - | - |
| Produto | Item Comercializado na quitanda |
| Entrada | Registro de chegada de produto |
| Saída | Registro de venda de Produto |
| Estoque | Quantidade disponível de produtos |

Lista de Acrônimos

* **SGQ:** Sistemas de Gestão de Quitanda
* **RF:** Requisitos Funcionais
* **RNF:** Requisitos não Funcionais
* **UC:** Casos de Uso
* **CA:** Critérios de Aceitação

### 1.4 Visão Geral do Documento

Este documento está organizado em: 

* Introdução e Visão Geral
* Descrição do Sistema
* Requisitos Detalhados
* modelos UML
* Regras de negócio

---

## 2. Descrição Geral do Sistema

### 2.1 Perspectiva do Sistema

O sistema é standalone(frontend), operando em um navegador web.

```mermaid

flowchart TD
    Usuário --> Interface
    Interface --> Controller
    Controller --> Model
    Model --> Controller
    Controller --> Interface
    Interface --> Usuário

```

---
### 2.2 Funções do Sistema

O Sistema deve:
* Cadastrar produtos
* Atualizar estoque
* Registrar Vendas
* Validar Operações
* Exibir Dados

---
### 2.3 Classes de Usuárips

| Usuários | Descrição |
| - | - |
| Estoquista | Gerenciar estoque |
| Caixa | Realizar Venda |
| Repositor | Registrar Entradas |

--- 
### 2.4 Ambiente Operacional

* Navegadores Web (Chrome, Edge, Firefox, Brave)

---

### 2.5 Restrições

* não utiliza Banco de Dados
* dados aramazenado na memória
* sem autenticação

---

### 2.6 Suposições

* Usuários possui conhecimento de Informática
* Volume de dados é pequeno

---

## 3. Requisitos do Sistema

### 3.1 Requisitos Funcionais
#### RF-01: Cadastro de Produtos

**Descrição:** Permitir cadastrar um produto
- prioridade: Alta
- versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 01

**Critérios de Aceitação**
[] Entrada de Dados: Nome, Cateoria, Preço, Quantidade
[] Validação dos Campos
[] Verificaçõa de Duplicidade
[] Saída: Notificação para o Usuário

#### RF-02: Atualizar Estoque

**Descrição:** Permitir atualização de dados de itens existentes
- prioridade: Alta
- versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 02

**Critérios de Aceitação**
[] Veerificar se item já está cadastrado
[] Entrada de Dados: Nome, Categoria, Preço e Quantidade
[] Validação de Campos
[] Saída: Notificação para o Usuário

#### RF-03: Listagem de Estoque

**Descrição:** Exibir Informações dos Produtos Cadastrados
- prioridade: Alta
- versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 03

**Critérios de Aceitação**
[] Listagem de Produtos
[] Saída: Id, Nome, Categoria, Preço, Quantidade

#### RF-04: Registro de Vendas

**Descrição:** Permitir a Venda de Produtos
- prioridade: Alta
- versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 04

**Critérios de Aceitação**
[] Venda de Produtos Cadastrados
[] Verificação de Quantidade
[] Atualização do Estoque
[] Notificação ao Usuário sobre a Venda

#### RF-05: Histórico de Movimentações

**Descrição:** Permitir o Registro de Movimentações (Entrada e Saída) de Produtos
- prioridade: Média
- versão: 1.0
- Data: 2026-04-28
- Rastreabilidade: Necessidade do Stakeholder 05

**Critérios de Aceitação**
[] Registro de Movimentações em Lista
[] Consulta das Movimentações
[] Verificação de Duplicidade
[] Notificação ao Usuário

---

### 3.2 Requisitos Não Funcionais

### RNF-001: Usabilidade
**Descrição:** Interface Simples e Intuitiva

### RNF-002: Desempenho
**Descrição:** Respostas rápidas e inferiores a 1 segundo

### RNF-003: Arquitetura de Software MVC
**Descrição:** Estrutura da Arquitetura de Códigos em Padrão MVC (Model, View, Controller)

### RNF-004: Confiabilidade
**Descrição:** Validação de Entrada de Dados Obrigatória


## Regras de Negócio

Tabela de Regras
|Regras de Negócio|Descrição|
|-|-|
| RN-01 | Quantidade de produtos não pode ser negativa |
| RN-02 | Preço do Porduto não pode ser Negativo |
| RN-03 | Venda so pode ser realizada se estoque for suficiente |
| RN-04 | Toda Movimentação deve ser Registrada |

Pode Existir Restrições para o Negócio (legais, locais ...)

## 5. Modelos do Sistema

### 5.1 Diagrama de Casos de Uso
Diagrama de Casos de Uso: O que o sistema deve fazer do ponto de vista do usuário

```mermaid

flowchart LR
    Repositor -->UC1[Registrar Entrada]
    Caixa --> UC2[Registrar Venda]
    Estoquista --> UC3[Consultar Estoque]
    Estoquista --> UC4[Consultar Movimentação]

```

### 5.2 Diagrama de Classes UML

Diagrama de Classes UML: Estrutura do código, classes, atributos e métodos

```mermaid
classDiagram
    class Produto{
        -id
        -nome
        -categoria
        -preço
        -quantidade

        +venda(nome, quantidade, precoTotal)
        +entrada (nome, quntidade, preço)
    }

    class QuitandaModel{
        +addProduto(Produto)
        +sellProduto(Produto)
    }

    classQuitandaView{
        +renderEstoque()
        +renderVenda()
    }

    class QuitandaController{
        +handleAddProduto()
        +handleSellProduto()
        +handleUpdateProduto()
        +handleUpdateEstoque()
        +handleRegistraMovimentacao()
    }

    QuitandaController --> QuitandaModel
    QuitandaController --> QuitandaView
    Quitandamodel --> Produto

```

---

### 5.3 Diagrama de Sequência
Diagrama de Sequência: Interação entre objetos ao longo do tempo, para realizar uma funcionalidade específica

#### 5.3.1 Venda

```mermaid
sequenceDiagram
    Usuario ->> Controller:solicitar venda
    Controller ->> Model: atualizar estoque
    Model ->>Controller: retorno
    Controller ->>View: atualizar a interface

```

---

## 6. Análise de Risco

### 6.1 matriz de Análise de Risco

| Risco | Impacto | Mitigação |
| - | - | - |
| Perda de Dados | Alto | usar LocalStorage |
| Entrada de Dados | Médio | Validar as Entradas de Dados |

---

### 7. Controle de Versões

### 7.1 Histórico de Alterações

| Versão | Data | Autor | Modificação |
| - | - | - |
| 1.0.0 | 2026-04-28 | Larissa Vieira | Versão Inicial |

### 7.2 Aprovações
| Papel | Nome | Data | Assinatura |
| - | - | - | - |
| Stakeholder | Seu Joaquim | 2026-04-29 | [] |



from flask import Flask, make_response, jsonify, request
from flask_cors import CORS  # Importação do CORS
import psycopg2

app = Flask(__name__)
CORS(app)  # Aplica CORS a toda a API

# Função para obter a conexão com o banco de dados
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        port="5432",
        dbname="ClubeLeiteiras",
        user="leiteiras",
        password="123"
    )
    print("tESTE")
    return conn


# Cadastra usuário ou endereço
def cadastra_usuario(rua, estado, cidade, pais, nome, sobrenome, telefone, cpf, dataNascimento, email, genero, foto, senha, id_endereco):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        if nome.strip():  # Verifica se o nome não está vazio ou só com espaços
            cursor.execute(
                '''
                INSERT INTO Usuarios (nome, sobrenome, telefone, cpf, dataNascimento, email, genero, foto, senha, id_endereco) 
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ''', 
                (nome, sobrenome, telefone, cpf, dataNascimento, email, genero, foto, senha, id_endereco)
            )
            conn.commit()  # Salva a inserção no banco

            response = make_response(
                jsonify({"message": "Usuário cadastrado com sucesso!"}),
                201
            )
        else:
             cursor.execute(
                '''
                INSERT INTO Endereco ( rua, estado, cidade, pais) 
                VALUES (%s, %s, %s, %s)
                ''', 
                (rua, estado, cidade, pais)
             )
             conn.commit()  # Salva a inserção no banco

             response = make_response(
                jsonify({"message": "Endereço cadastrado com sucesso!"}),
                201
             )
             

    except Exception as e:
        conn.rollback()  # Reverte a operação em caso de erro
        response = make_response(
            jsonify({"error": f"Erro ao cadastrar usuário: {e}"}), 
            500
        )

    finally:
        cursor.close()
        conn.close()

    return response


# --------------------------------- Adicionar um livro aos favoritos -----------------------------------
def adiciona_favorito(titulo, usuario_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT id_livro FROM Livros WHERE titulo = %s', (titulo,))
        livro = cursor.fetchone()
        
        if not livro:
            return make_response(jsonify({"error": "Livro não encontrado!"}), 404)

        id_livro = livro[0]

        cursor.execute('SELECT quantidade FROM Favoritos WHERE id_livro = %s', (id_livro,))
        favorito = cursor.fetchone()

        if favorito:
            quantidade = favorito[0] + 1
            cursor.execute('UPDATE Favoritos SET quantidade = %s WHERE id_livro = %s', (quantidade, id_livro))
        else:
            cursor.execute('INSERT INTO Favoritos (id_livro, quantidade) VALUES (%s, %s)', (id_livro, 1))

        conn.commit()

        return make_response(jsonify({"message": "Favorito adicionado com sucesso!"}), 201)

    except Exception as e:
        conn.rollback()
        return make_response(jsonify({"error": f"Erro ao favoritar livro: {e}"}), 500)

    finally:
        cursor.close()
        conn.close()

# ------------------------------------------------ atualizar_perfil -----------------------------------------

def atualizar_perfil(nome, sobrenome, telefone, cpf, dataNascimento, email, genero, foto, senha, usuario_id):
     conn = get_db_connection()
     cursor = conn.cursor()

     try:
         
         if nome is not None:
             cursor.execute( '''
                  UPDATE Usuarios SET nome = %s WHERE usuario_id = %s
              ''' ), nome, usuario_id
        
         if sobrenome is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET sobrenome = %s WHERE usuario_id = %s
            '''), sobrenome, usuario_id
               
         if telefone is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET telefone = %s WHERE usuario_id = %s
            '''), telefone, usuario_id

         if cpf is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET cpf = %s WHERE usuario_id = %s
            '''), cpf, usuario_id

         if dataNascimento is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET dataNascimento = %s WHERE usuario_id = %s
            '''), dataNascimento, usuario_id

         if email is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET email = %s WHERE usuario_id = %s
            '''), email, usuario_id
        
        
         if genero is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET genero = %s WHERE usuario_id = %s
            '''), genero, usuario_id

        
         if foto is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET foto = %s WHERE usuario_id = %s
            '''),foto, usuario_id
        
        
         if senha is not None:
            cursor.execute( '''
                  UPDATE Usuarios SET senha = %s WHERE usuario_id = %s
            '''), senha, usuario_id
     
         conn.commit()  # Salva a inserção no banco
      
         response = make_response(
                jsonify({"message": "Informações atualizadas com sucesso!"}),
                201
             )
             
         return response

     except Exception as e:
        conn.rollback()  # Reverte a operação em caso de erro
        response = make_response(
            jsonify({"error": f"Erro ao favoritar livro: {e}"}), 
            500
        )

     finally:
        cursor.close()
        conn.close()

     return response

 # ------------------------------------------------------------ Remover dos favoritos-------------------------------------------------------
  

def atualizar_perfil(titulo):
     conn = get_db_connection()
     cursor = conn.cursor()

     try:

        id_livro = cursor.execute('''
               SELECT id_livro FROM Livros WHERE titulo = %s'
           '''), titulo
        
        cursor.execute( '''
          DELETE FROM Favoritos WHERE id_livro = %s
        '''
        ), id_livro

        conn.commit()  # Salva a deleção no banco
      
        response = make_response(
                jsonify({"message": "Informações atualizadas com sucesso!"}),
                201
             )
             
        return response

     except Exception as e:
        conn.rollback()  # Reverte a operação em caso de erro
        response = make_response(
            jsonify({"error": f"Erro ao remover livro: {e}"}), 
            500
        )

     finally:
        cursor.close()
        conn.close()

     return response


 # ------------------------------------------------------------ Login ------------------------------------------------------------//


@app.route('/login', methods=["POST"])

def login():
    data = request.get_json()
    telefone_email = data.get('telefoneEmail')
    senha = data.get('senha')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        # Verifica se é um telefone ou um email
        cursor.execute('''
            SELECT id_usuario, senha FROM Usuarios WHERE telefone = %s OR email = %s
        ''', (telefone_email, telefone_email))
        
        user = cursor.fetchone()
        if user is not None:
            usuario_id, senha_armazenada = user
            if senha_armazenada == senha:
                return make_response(
                    jsonify({"message": "Login bem-sucedido!", "usuario_id": usuario_id}),
                    200
                )
            else:
                return make_response(
                    jsonify({"error": "Senha incorreta!"}),
                    401
                )
        else:
            return make_response(
                jsonify({"error": "Usuário não encontrado!"}),
                404
            )

    except Exception as e:
        conn.rollback()  # Reverte a operação em caso de erro
        return make_response(
            jsonify({"error": f"Erro ao realizar login: {e}"}),
            500
        )

    finally:
        cursor.close()
        conn.close()

  
 # ------------------------------------------------------------ Preencher carteirinha ------------------------------------------------------------//

  
@app.route('/perfil', methods=["GET"])

def preencher_carterinha(usuario_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT * FROM usuarios where id_usuario = %s', usuario_id)
        colunas = [desc[0] for desc in cursor.description]  # Obtém os nomes das colunas
        meus_usuarios = [dict(zip(colunas, row)) for row in cursor.fetchall()]  # Converte para lista de dicionários
        
        response = make_response(
            jsonify(meus_usuarios), 
            200
        )
        response.headers["Content-Type"] = "application/json; charset=utf-8"
        return response
    
    except Exception as e:
        response = make_response(
            jsonify({"error": f"Erro ao consultar banco de dados: {e}"}), 
            500
        )
        response.headers["Content-Type"] = "application/json; charset=utf-8"
        return response
    
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(debug=True)
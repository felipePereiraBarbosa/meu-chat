import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [socket] = useState(() => io('http://localhost:3001'));

  useEffect(() => {
    socket.on('mensagem', (msg) => {
      setMensagens((prevMensagens) => [...prevMensagens, msg]);
    });

    return () => socket.disconnect();
  }, [socket]);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      socket.emit('mensagem', mensagem);
      setMensagem('');
    }
  };

  return (
    <div>
      <div>
        {mensagens.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button onClick={enviarMensagem}>Enviar</button>
    </div>
  );
}

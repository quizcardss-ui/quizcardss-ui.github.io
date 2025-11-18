/* -------------------------
  Datos: (usa tu objeto data existente)
-------------------------*/
const data = {
  1: {
    nombre: 'Primer Cuatrimestre',
    materias: [
      { id: 'Desarrollo Humano y Valores',
       guia: `El Desarrollo Humano es un campo de estudio esencial que se centra en expandir las capacidades de las personas y mejorar su bienestar. A diferencia de una visión puramente económica, su principal objetivo no es simplemente aumentar la riqueza material, sino ofrecer a los individuos oportunidades para vivir una vida que valoren. Este enfoque subraya que el desarrollo es inherentemente dinámico, un proceso continuo y no estático, que abarca la totalidad de la vida de una persona.

Naturaleza y Alcance del Desarrollo
Una característica fundamental del desarrollo humano es su multidimensionalidad. Esto implica que no se limita a un único aspecto, como la genética o la edad adulta, sino que involucra las esferas social, económica, emocional, física y cultural. Por lo tanto, cuando se consideran las acciones que lo promueven, se debe incluir la salud, la educación y la seguridad básica. De hecho, una política pública eficaz se enfoca precisamente en estos tres pilares para asegurar un progreso integral.
Cualquier concepto o acción que promueva lo opuesto a estos pilares, como el aislamiento social, queda excluido de los objetivos del desarrollo humano. Su meta siempre es el bienestar y la apertura de oportunidades.

El Papel de la Familia y las Habilidades Sociales
Dentro de la estructura social, la familia juega un rol crucial y primario. Su contribución principal al crecimiento de una persona es el apoyo emocional y la socialización. Este entorno es el factor más influyente en el crecimiento emocional de un niño, mucho más que otras instituciones o medios de comunicación.
En el ámbito de las relaciones interpersonales, una habilidad social clave que fortalece las relaciones y mejora la comunicación es la empatía. Comprender su significado es vital: significa activamente ponerse en el lugar del otro para entender sus sentimientos y perspectivas. Sin esta habilidad, la comunicación se debilita y aumenta la desconfianza.
En resumen, el desarrollo humano es un proceso continuo y complejo impulsado por el fomento de capacidades individuales, el apoyo del entorno familiar y la implementación de políticas que prioricen el bienestar multidimensional de la sociedad.`,
        preguntas: [
          { q: '¿Qué busca el desarrollo humano?',
            opciones: ['Mejorar capacidades y bienestar', 'Aumentar riqueza', 'Solo la educación formal', 'Competencia física únicamente'],
            correcta: 0 },
          { q: '¿Cuál es una característica del desarrollo humano?',
            opciones: ['Multidimensionalidad', 'Unidimensionalidad', 'Solo genética', 'Solo edad adulta'],
            correcta: 0 },
          { q: '¿Por qué es importante la empatía?',
            opciones: ['Fortalece relaciones', 'Debilita la comunicación', 'Aumenta egoísmo', 'Reduce confianza'],
            correcta: 0 },
          { q: '¿Quién influye en el crecimiento emocional de un niño?',
            opciones: ['Entorno familiar', 'Solo la escuela', 'La televisión únicamente', 'Nada influye'],
            correcta: 0 },
          { q: '¿El desarrollo humano es estático o dinámico?',
            opciones: ['Dinámico', 'Estático', 'Instantáneo', 'Inevitablemente malo'],
            correcta: 0 },
          { q: '¿Qué aspecto NO pertenece al desarrollo humano?',
            opciones: ['Aislamiento social', 'Salud', 'Educación', 'Seguridad básica'],
            correcta: 1 },
          { q: 'La familia proporciona principalmente:',
            opciones: ['Apoyo emocional y socialización', 'Competencia laboral', 'Entrenamiento físico', 'Solo dinero'],
            correcta: 0 },
          { q: 'Empatía significa:',
            opciones: ['Ponerse en el lugar del otro', 'Dar consejos sin escuchar', 'Ignorar sentimientos', 'Competir con otros'],
            correcta: 0 },
          { q: 'Una política pública que promueve desarrollo humano debería enfocarse en:',
            opciones: ['Salud, educación y seguridad', 'Solo economía', 'Solo infraestructura', 'Solo turismo'],
            correcta: 0 },
          { q: 'El concepto de desarrollo humano incluye:',
            opciones: ['Bienestar y oportunidades', 'Solo crecimiento demográfico', 'Solo ganancias económicas', 'Solo entretenimiento'],
            correcta: 0 },
        ]
      },
    
{ id: 'Fundamentos Matemáticos',
  guia:
`1. Fracciones, Decimales y Proporciones
Conversión de Decimal a Fracción: Para convertir un decimal como 0.5 a una fracción, se divide el número por la potencia de 10 correspondiente (0.5=5/10). Una fracción equivalente se obtiene multiplicando o dividiendo tanto el numerador como el denominador por el mismo número (Ejemplo: 5/10 es equivalente a 1/2 o 2/4).

Suma de Fracciones: Para sumar fracciones con distinto denominador, primero se debe encontrar un denominador común (mínimo común múltiplo, MCM). Luego, se ajusta cada numerador y se realiza la suma.

Ejemplo: Para 2/3+1/6, el MCM es 6, lo que convierte la operación en 4/6+1/6=5/6.

Razones y Proporciones: Una razón compara dos cantidades (a:b). Una proporción equivalente mantiene la misma relación multiplicando (o dividiendo) ambos términos de la razón por el mismo factor (Ejemplo: 2:3 es proporcional a 4:6).

2. Aritmética, Álgebra y Propiedades
Resolución de Ecuaciones Lineales: Para resolver una ecuación simple como 3x=18, se utiliza la operación inversa. Dado que el 3 está multiplicando a x, se divide ambos lados de la ecuación por 3 para despejar la incógnita (x=18/3, por lo tanto, x=6).

Propiedad Asociativa de la Suma: Esta propiedad establece que la forma en que agrupamos los números al sumar no altera el resultado: (a+b)+c=a+(b+c).

Porcentajes (Cálculo de Descuentos): Para calcular un descuento, se multiplica el precio original por el porcentaje de descuento (en su forma decimal, 25%=0.25). El resultado es el monto descontado. Para hallar el precio final, se resta este monto al precio original.

Fórmula: Precio Final = Precio Original – (Precio Original × Descuento Decimal).

3. Raíces y Potencias
Raíz Cuadrada: La raíz cuadrada de un número (x) es un número (y) que, multiplicado por sí mismo, da x.

Ejemplo: La raíz cuadrada de 81 es 9 porque 9×9=81.

Suma de Raíces Cuadradas: Las raíces se resuelven individualmente antes de sumarse.

Ejemplo:  
25

​
 + 
16

​
 =5+4=9.

Potencias y Signos: Cuando un número negativo está elevado a una potencia par, el resultado es siempre positivo.

Ejemplo: (−4) 
2
 =(−4)×(−4)=16.

4. Clasificación de Números
Números Irracionales: Son números que no pueden ser expresados como una fracción exacta de dos números enteros y, por lo tanto, tienen una expansión decimal infinita y no repetitiva. El número π (pi) es el ejemplo más conocido de un número irracional.`,
  
  preguntas: [

    {
      q: '¿Cuál es la fracción equivalente a 0.5?',
      opciones: ['2/4', '3/5', '1/4', '4/3'],
      correcta: 0
    },

    {
      q: '¿Cuál es el resultado de 2/3 + 1/6?',
      opciones: ['1/2', '5/6', '2/9', '3/6'],
      correcta: 1
    },

    {
      q: 'La raíz cuadrada de 81 es:',
      opciones: ['8', '9', '3', '7'],
      correcta: 1
    },

    {
      q: '¿Qué tipo de número es π (pi)?',
      opciones: ['Primo', 'Racional', 'Irracional', 'Entero'],
      correcta: 2
    },

    {
      q: '¿Cuál es el resultado de (–4)²?',
      opciones: ['–16', '4', '16', '–8'],
      correcta: 2
    },

    {
      q: 'Si un artículo cuesta $1200 y tiene un descuento del 25%, ¿cuánto pagas?',
      opciones: ['$900', '$300', '$1200', '$1000'],
      correcta: 0
    },

    {
      q: '¿Qué propiedad indica que (a + b) + c = a + (b + c)?',
      opciones: ['Conmutativa', 'Distributiva', 'Asociativa', 'Neutra'],
      correcta: 2
    },

    {
      q: 'Si 3x = 18, ¿cuál es el valor de x?',
      opciones: ['9', '6', '3', '12'],
      correcta: 1
    },

    {
      q: '¿Cuál es el resultado de √25 + √16?',
      opciones: ['9', '7', '11', '5'],
      correcta: 0
    },

    {
      q: 'Si una receta usa razón 2:3, ¿cuál es una proporción equivalente?',
      opciones: ['4:6', '3:5', '2:5', '1:3'],
      correcta: 0
    }

  ]
},
{ id: 'Física',
  guia:
`La Fuerza se define fundamentalmente como una interacción capaz de cambiar el estado de movimiento de un objeto, lo que se manifiesta como una aceleración. La unidad de medida de la fuerza en el Sistema Internacional es el Newton (N).El concepto de fuerza está intrínsecamente ligado al movimiento a través de las Leyes de Newton. Específicamente, el principio de inercia es la base de la Primera Ley de Newton, la cual postula que un objeto mantendrá su estado de reposo o de movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él. Esto implica que, en la ausencia hipotética de fricción, un objeto que ya está en movimiento continuaría moviéndose indefinidamente.Efecto de la Fuerza Neta y FricciónLa aplicación de una fuerza no equilibrada resulta en un cambio. Cuando sobre un objeto actúa una fuerza neta distinta de cero, esto produce aceleración. Esto es el núcleo de la Segunda Ley de Newton. Por el contrario, si actúan fuerzas iguales en sentido opuesto sobre un objeto, estas se anulan y la fuerza neta es cero, manteniendo el objeto en equilibrio o movimiento constante.Una fuerza omnipresente en nuestro entorno es la fricción, la cual siempre se opone al movimiento. Esta fuerza disipativa es responsable de que los objetos en movimiento se detengan eventualmente en el mundo real.Distinción entre Masa y PesoEs crucial diferenciar entre masa y peso, ya que no son lo mismo.La masa es una medida de la cantidad de materia que posee un objeto y es una propiedad constante del mismo, independientemente de dónde se encuentre. Por otro lado, el peso ($W$) es la fuerza con la que la gravedad atrae esa masa. Por lo tanto, el peso cambia con la gravedad.La fórmula que define el peso es: Peso = masa $\times$ gravedad ($W = mg$). Debido a esta relación lineal, si se duplica la masa de un objeto, su peso aumenta al doble, siempre que la aceleración de la gravedad ($g$) se mantenga constante.`,
  
  preguntas: [

    {
      q: 'La fuerza se define como:',
      opciones: [
        'Una interacción que puede cambiar el movimiento',
        'La cantidad de materia en un objeto',
        'La rapidez con la que algo se mueve',
        'La energía total de un sistema'
      ],
      correcta: 0
    },

    {
      q: '¿Cuál es la fórmula del peso?',
      opciones: [
        'Peso = masa × velocidad',
        'Peso = masa × gravedad',
        'Peso = masa ÷ gravedad',
        'Peso = volumen × densidad'
      ],
      correcta: 1
    },

    {
      q: 'Si no hubiera fricción, un objeto en movimiento:',
      opciones: [
        'Se detendría lentamente',
        'Aumentaría su masa',
        'Continuaría moviéndose indefinidamente',
        'Cambiaría su dirección automáticamente'
      ],
      correcta: 2
    },

    {
      q: 'La unidad de fuerza en el Sistema Internacional es:',
      opciones: ['Newton', 'Joule', 'Pascal', 'Watt'],
      correcta: 0
    },

    {
      q: 'La fricción es una fuerza que:',
      opciones: [
        'Siempre acelera los objetos',
        'Se opone al movimiento',
        'Hace que los objetos floten',
        'Aumenta la masa'
      ],
      correcta: 1
    },

    {
      q: 'Una fuerza neta distinta de cero produce:',
      opciones: ['Aceleración', 'Inercia infinita', 'Energía térmica', 'Peso cero'],
      correcta: 0
    },

    {
      q: 'El principio de inercia corresponde a:',
      opciones: [
        'La primera ley de Newton',
        'La segunda ley de Newton',
        'La tercera ley de Newton',
        'La ley de Coulomb'
      ],
      correcta: 0
    },

    {
      q: 'Masa y peso NO son lo mismo porque:',
      opciones: [
        'La masa depende de la gravedad',
        'El peso es independiente de la gravedad',
        'La masa es constante y el peso cambia con la gravedad',
        'El peso mide cuánta energía tiene un objeto'
      ],
      correcta: 2
    },

    {
      q: 'Si duplicas la masa de un objeto, su peso:',
      opciones: [
        'Se reduce a la mitad',
        'Se mantiene igual',
        'Aumenta al doble',
        'Se vuelve cero'
      ],
      correcta: 2
    },

    {
      q: 'Cuando fuerzas iguales en sentido opuesto actúan sobre un objeto:',
      opciones: [
        'Produce aceleración',
        'La fuerza neta es cero',
        'Cambia su peso',
        'Aumenta su volumen'
      ],
      correcta: 1
    }

  ]
},
{ id: 'Fundamentos de programación',
  guia:
`El corazón de la programación es el algoritmo, el cual se define como un conjunto ordenado y finito de pasos diseñado específicamente para resolver un problema o realizar una tarea. Estos algoritmos se implementan utilizando un lenguaje de programación, que es la herramienta formal para dar instrucciones a la computadora. Un ejemplo de un lenguaje ampliamente utilizado es Java.Elementos Básicos y Estructuras de ControlDentro del código, se manejan datos mediante variables y constantes. La principal diferencia entre ambas es su mutabilidad: la variable cambia su valor durante la ejecución del programa, mientras que la constante no cambia su valor una vez definido. Un ejemplo típico de constante, que nunca varía, es el número PI ($\pi$).La ejecución del código se controla mediante estructuras lógicas:Sentencias Condicionales: Una sentencia if se utiliza para la toma de decisiones basadas en una condición. Permite que ciertas partes del código se ejecuten solo si una expresión lógica resulta verdadera.Ciclos o Bucles: Un ciclo for se emplea para repetir un bloque de instrucciones un número determinado de veces.Prácticas de DesarrolloUna actividad esencial en el desarrollo de software es la depuración (debugging). Depurar significa encontrar y corregir errores (o bugs) en el código fuente.Adicionalmente, los comentarios en el código son vitales, ya que sirven para explicar el código para que otros programadores (o el mismo autor en el futuro) puedan entender su propósito y funcionamiento. Estos comentarios son ignorados por el compilador y no afectan la ejecución del programa.Finalmente, las funciones de salida son herramientas comunes; por ejemplo, console.log en JavaScript tiene la función de imprimir texto o valores en la consola de desarrollo, lo que es útil para la depuración y para mostrar resultados.`,

  preguntas: [

    {
      q: 'Un algoritmo es:',
      opciones: [
        'Un conjunto ordenado de pasos para resolver un problema',
        'Un error en un programa',
        'Un archivo ejecutable',
        'Una red social'
      ],
      correcta: 0
    },

    {
      q: '¿Cuál es la diferencia entre variable y constante?',
      opciones: [
        'La variable cambia; la constante no cambia',
        'La constante cambia; la variable no',
        'Ambas cambian siempre',
        'Ninguna de las dos se usa en programación'
      ],
      correcta: 0
    },

    {
      q: 'Un lenguaje de programación sirve para:',
      opciones: [
        'Controlar electrodomésticos',
        'Dar instrucciones a la computadora',
        'Diseñar ropa',
        'Escribir textos científicos'
      ],
      correcta: 1
    },

    {
      q: 'Ejemplo de lenguaje de programación:',
      opciones: ['Java', 'Inglés', 'Latín', 'Alemán'],
      correcta: 0
    },

    {
      q: 'Una sentencia if se utiliza para:',
      opciones: [
        'Ejecutar código repetidamente',
        'Tomar decisiones basadas en una condición',
        'Crear variables',
        'Ordenar listas'
      ],
      correcta: 1
    },

    {
      q: 'Un ciclo for sirve para:',
      opciones: [
        'Repetir un bloque de instrucciones',
        'Cerrar el programa',
        'Imprimir texto sin parar',
        'Detectar errores automáticamente'
      ],
      correcta: 0
    },

    {
      q: '¿Qué significa depurar (debug)?',
      opciones: [
        'Instalar programas',
        'Encontrar y corregir errores en el código',
        'Escribir más rápido',
        'Borrar todas las variables'
      ],
      correcta: 1
    },

    {
      q: '¿Qué imprime console.log en JavaScript?',
      opciones: [
        'Texto o valores en la consola',
        'Un archivo nuevo',
        'Una ventana emergente',
        'Un formulario'
      ],
      correcta: 0
    },

    {
      q: 'Una constante típica en programación es:',
      opciones: ['PI', 'edad', 'usuario', 'mensaje'],
      correcta: 0
    },

    {
      q: 'Los comentarios en código sirven para:',
      opciones: [
        'Hacer más lento el programa',
        'Explicar el código para otros programadores',
        'Ejecutar instrucciones ocultas',
        'Llamar funciones automáticamente'
      ],
      correcta: 1
    }

  ]
},

{ id: 'Fundamentos de Redes',
  guia:
`La función principal de una red de computadoras es compartir recursos e información entre dispositivos. Esto permite una comunicación eficiente y el uso colaborativo de hardware y software.

Tipos de Redes
Las redes se clasifican a menudo según su extensión geográfica:

Una LAN (Local Area Network) describe una red que cubre un área local limitada, como un edificio, una oficina o una casa.

Una WAN (Wide Area Network) se caracteriza por conectar redes en áreas geográficas grandes que pueden abarcar ciudades, países o incluso el mundo.

Componentes Clave y Direccionamiento
Cada dispositivo conectado a una red necesita un identificador único para poder comunicarse. Este identificador es la dirección IP (Internet Protocol). Existen dos tipos principales de IP:

Una dirección IP estática se caracteriza por mantenerse fija sin cambiar, lo que es útil para servidores y equipos que necesitan ser localizables de forma permanente.

La máscara de subred es un componente esencial de la configuración IP que se utiliza para distinguir la parte de red y la parte de host dentro de una dirección IP, permitiendo a los dispositivos saber si la comunicación es local o debe salir de la red.

Dispositivos y Protocolos
Existen dispositivos hardware fundamentales para el funcionamiento de las redes:

Un router tiene la función principal de dirigir el tráfico de datos entre diferentes redes (por ejemplo, entre tu red local y la red de Internet).

Un switch tradicional opera principalmente en la Capa 2 (Enlace de datos) del modelo OSI, gestionando el tráfico dentro de una misma red local.

Un servidor DNS (Domain Name System) cumple una función crítica al convertir nombres de dominio (como google.com) en direcciones IP numéricas, que son las que las computadoras realmente necesitan para localizar un servidor.

Un firewall funciona como un sistema de seguridad cuya función es filtrar y controlar el tráfico entrante y saliente para proteger la red de accesos no autorizados o amenazas externas.`,
  preguntas: [
    {
      q: '¿Cuál es la función principal de una red de computadoras?',
      opciones: [
        'Compartir recursos e información entre dispositivos', // correcta (posición 0)
        'Crear imágenes estáticas',
        'Aumentar fuerza del hardware',
        'Reducir la memoria disponible'
      ],
      correcta: 0
    },
    {
      q: '¿Qué describe mejor a una LAN?',
      opciones: [
        'Una red satelital global',
        'Una red sin ningún tipo de cable',
        'Una red que cubre un área local (edificio u oficina)', // correcta (posición 2)
        'Una red que abarca países'
      ],
      correcta: 2
    },
    {
      q: '¿Qué es una dirección IP?',
      opciones: [
        'Un identificador único para un dispositivo en la red', // correcta (posición 0)
        'Un tipo de cable de red',
        'Una base de datos',
        'Un protocolo de video'
      ],
      correcta: 0
    },
    {
      q: '¿Qué hace un router?',
      opciones: [
        'Optimiza la RAM del PC',
        'Dirige tráfico entre diferentes redes', // correcta (posición 1)
        'Mejora la calidad del monitor',
        'Almacena archivos personales'
      ],
      correcta: 1
    },
    {
      q: '¿En qué capa OSI trabaja un switch tradicional?',
      opciones: [
        'Capa 1 (Física únicamente)',
        'Capa 5 (Sesión)',
        'Capa 2 (Enlace de datos)', // correcta (posición 2)
        'Capa 7 (Aplicación)'
      ],
      correcta: 2
    },
    {
      q: '¿Qué hace un servidor DNS?',
      opciones: [
        'Amplifica señal WiFi',
        'Analiza virus',
        'Detecta puertos abiertos',
        'Convierte nombres de dominio en direcciones IP' // correcta (posición 3)
      ],
      correcta: 3
    },
    {
      q: 'Una dirección IP estática se caracteriza por:',
      opciones: [
        'Mantenerse fija sin cambiar', // correcta (posición 0)
        'Cambiar automáticamente cada día',
        'No poder usarse con routers',
        'Ser exclusiva de redes inalámbricas'
      ],
      correcta: 0
    },
    {
      q: '¿Para qué sirve la máscara de subred?',
      opciones: [
        'Calcular la potencia eléctrica',
        'Optimizar los gráficos',
        'Aumentar la velocidad de la PC',
        'Distinguir la parte de red y host dentro de la IP' // correcta (posición 3)
      ],
      correcta: 3
    },
    {
      q: '¿Qué función cumple un firewall?',
      opciones: [
        'Mejorar el rendimiento del disco duro',
        'Sustituir al router',
        'Detectar redes abiertas automáticamente',
        'Filtrar y controlar tráfico para proteger la red' // correcta (posición 3)
      ],
      correcta: 3
    },
    {
      q: 'Una WAN se caracteriza por:',
      opciones: [
        'Funcionar solo en una casa',
        'Ser igual a Bluetooth',
        'No usar routers',
        'Conectar redes en áreas geográficas grandes (ciudades, países)' // correcta (posición 3)
      ],
      correcta: 3
    }
  ]
},

{ id: 'Comunicación y Habilidades Digitales',
  guia:
`La comunicación digital se caracteriza por ser aquella que se realiza a través de medios electrónicos y puede ser asincrónica, permitiendo la interacción a distancia y en diferentes momentos.

Habilidades Digitales Esenciales
Para navegar en el mundo actual, es indispensable dominar ciertas habilidades digitales básicas esenciales. Estas incluyen, fundamentalmente, el uso de correo electrónico y la búsqueda efectiva en internet. Paralelamente, una habilidad de comunicación digital clave es saber escribir mensajes claros y respetuosos en las diversas plataformas electrónicas, promoviendo una interacción efectiva y profesional.

Gestión de la Huella y la Privacidad
El rastro que dejas en internet por tus actividades digitales se conoce como huella digital. Esta es tu identidad en línea, y su gestión es crucial. Una acción que podría afectar negativamente tu huella digital es publicar contenido inapropiado o agresivo en redes, lo cual puede tener consecuencias a largo plazo en tu vida personal y profesional.

Una práctica segura en línea fundamental es no compartir contraseñas y verificar enlaces sospechosos antes de hacer clic. Además, una buena práctica digital general es verificar las fuentes antes de compartir información, combatiendo la desinformación.

Ciberseguridad y Protección de Cuentas
Para protegerse de amenazas comunes, es vital adoptar medidas de seguridad robustas:

Phishing se describe como un correo o mensaje fraudulento enviado con el objetivo de robar información sensible, como credenciales de acceso o datos bancarios, haciéndose pasar por una entidad legítima.

Una contraseña segura se caracteriza por ser una combinación de letras, números y símbolos que dificulta los intentos de adivinación o hackeo.

La verificación de dos pasos es una capa adicional de seguridad que sirve para agregar una capa extra de seguridad a tus cuentas, exigiendo un segundo método de autenticación además de la contraseña.`,
  
  preguntas: [
    {
      q: '¿Qué caracteriza a la comunicación digital?',
      opciones: [
        'Se realiza a través de medios electrónicos y puede ser asincrónica', // correcta (0)
        'Solo puede hacerse cara a cara',
        'Nunca usa imágenes ni videos',
        'Necesita exclusivamente interacción física'
      ],
      correcta: 0
    },

    {
      q: '¿Qué es una habilidad digital básica esencial?',
      opciones: [
        'Aprender a desarmar computadoras',
        'Crear hardware profesional',
        'Uso de correo electrónico y búsqueda en internet', // correcta (2)
        'Correr software avanzado'
      ],
      correcta: 2
    },

    {
      q: '¿Qué es la huella digital?',
      opciones: [
        'Un archivo que guarda tus huellas dactilares',
        'Un virus informático',
        'Una red social privada',
        'Rastro que dejas en internet por tus actividades digitales' // correcta (3) ✔️ NUEVO
      ],
      correcta: 3
    },

    {
      q: '¿Cuál es una práctica segura en línea?',
      opciones: [
        'Compartir contraseñas con amigos',
        'No compartir contraseñas y verificar enlaces sospechosos', // correcta (1)
        'Usar cualquier WiFi sin protección',
        'Ignorar configuraciones de privacidad'
      ],
      correcta: 1
    },

    {
      q: '¿Qué podría afectar negativamente tu huella digital?',
      opciones: [
        'Publicar contenido inapropiado o agresivo en redes', // correcta (0)
        'Usar el modo avión',
        'Cerrar tus aplicaciones',
        'Tener aplicaciones antiguas'
      ],
      correcta: 0
    },

    {
      q: '¿Qué describe mejor el phishing?',
      opciones: [
        'Un correo o mensaje fraudulento para robar información', // correcta (0)
        'Un tipo de música electrónica',
        'Un programa de edición',
        'Un archivo para limpiar virus'
      ],
      correcta: 0
    },

    {
      q: '¿Cuál es una buena práctica digital?',
      opciones: [
        'Ignorar noticias y compartirlas sin leer',
        'Verificar fuentes antes de compartir información', // correcta (1)
        'Usar WiFi público sin cuidado',
        'Guardar contraseñas en comentarios'
      ],
      correcta: 1
    },

    {
      q: '¿Qué se considera una contraseña segura?',
      opciones: [
        'Tu nombre más tu edad',
        'Una palabra sencilla',
        'Letras, números y símbolos combinados', // correcta (2)
        '1234'
      ],
      correcta: 2
    },

    {
      q: '¿Para qué sirve la verificación de dos pasos?',
      opciones: [
        'Agregar una capa extra de seguridad a tus cuentas', // correcta (0)
        'Hacer más lento el inicio de sesión',
        'Compartir tu código con amigos',
        'Permitir acceso sin autenticación'
      ],
      correcta: 0
    },

    {
      q: '¿Qué es una habilidad de comunicación digital?',
      opciones: [
        'Saber escribir mensajes claros y respetuosos en plataformas electrónicas', // correcta (0)
        'Hablar rápido en persona',
        'No contestar mensajes nunca',
        'Usar dispositivos sin internet'
      ],
      correcta: 0
    }
  ]
},

{ id: 'Inglés I',
  guia:
`Saludos y Despedidas
La comunicación en inglés comienza con un saludo apropiado según la hora del día. Para el inicio del día, se utiliza la frase "Good morning" como un saludo formal y adecuado. Para despedirse de manera correcta en cualquier momento, la frase más común y directa es "Goodbye". Si se busca un saludo más informal, simplemente se puede usar "Hi!".

Presentaciones Personales
Presentarse a alguien correctamente requiere el uso de la conjugación adecuada del verbo "to be". Hay dos formas principales para presentarse:

Forma Informal: Se puede decir "Hi, I am Juan."

Forma Formal: Se utiliza la estructura "My name is Juan."

Al incluir el lugar de origen, la frase correcta para decir de dónde se es, es "I am from Mexico.". Combinando estas estructuras, una presentación completa y correcta, incluyendo el lugar, sería: "Hello, my name is Juan and I am from Mexico."

Preguntas y Respuestas Comunes
En una conversación básica, es necesario saber cómo preguntar y responder sobre el bienestar y la identidad.

Para preguntar el nombre de otra persona, la frase correcta es "What is your name?"

Para preguntar cómo está alguien, se usa "How are you?"

Una respuesta válida y cortés a esta pregunta es "I am fine, thank you."

Finalmente, una pregunta cotidiana muy importante es cómo preguntar la hora, para lo cual se emplea la estructura "What time is it?"`,

  preguntas: [

    {
      q: '¿Cómo se presenta Juan en inglés de forma correcta?',
      opciones: [
        'Hi, I am Juan.',                 // correcta (0)
        'Hello, Juan I am.',
        'I Juan am.',
        'Hi I Juan.'
      ],
      correcta: 0
    },

    {
      q: '¿Cómo se pregunta la hora en inglés?',
      opciones: [
        '"How are you?"',
        '"Where is the time?"',
        '"What time is it?"',             // correcta (2)
        '"Is it morning?"'
      ],
      correcta: 2
    },

    {
      q: '¿Cuál es un saludo adecuado por la mañana?',
      opciones: [
        '"Good night"',
        '"Goodbye"',
        '"Good morning"',                 // correcta (2)
        '"See you later"'
      ],
      correcta: 2
    },

    {
      q: '¿Cuál es una presentación formal correcta?',
      opciones: [
        '"Nice to sleep"',
        '"My name is Juan."',             // correcta (1)
        '"I am sleep"',
        '"Am from Juan."'
      ],
      correcta: 1
    },

    {
      q: '¿Cómo pregunta Juan el nombre de otra persona?',
      opciones: [
        '"What is your name?"',           // correcta (0)
        '"Where is your name?"',
        '"How name you?"',
        '"You name what?"'
      ],
      correcta: 0
    },

    {
      q: '¿Qué frase usa Juan para despedirse correctamente?',
      opciones: [
        '"Goodbye"',                      // correcta (0)
        '"Good morning"',
        '"Name Juan"',
        '"What time?"'
      ],
      correcta: 0
    },

    {
      q: '¿Cuál es una respuesta válida a "How are you?"?',
      opciones: [
        '"I am fine, thank you."',        // correcta (0)
        '"My name is Juan."',
        '"I time good."',
        '"Fine name Juan."'
      ],
      correcta: 0
    },

    {
      q: '¿Cómo dice Juan de dónde es?',
      opciones: [
        '"I am from Mexico."',            // correcta (0)
        '"I from Mexico."',
        '"From Juan Mexico."',
        '"I be México."'
      ],
      correcta: 0
    },

    {
      q: '¿Cuál es un saludo informal adecuado?',
      opciones: [
        '"Good evening"',
        '"Farewell!"',
        '"Hi!"',                          // correcta (2)
        '"Night!"'
      ],
      correcta: 2
    },

    {
      q: '¿Cuál es una presentación correcta incluyendo ciudad?',
      opciones: [
        '"Hello, my name is Juan and I am from Mexico."', // correcta (0)
        '"Juan name Mexico."',
        '"Is Juan Mexico."',
        '"Hello Juan Mexico."'
      ],
      correcta: 0
    }

  ]
}
]
  },
  
 2: {
  nombre: 'Segundo Cuatrimestre',
  materias: [
   { id: 'Habilidades socioemocionales y manejo de conflictos',
  guia:
`Las habilidades socioemocionales son definidas como las capacidades para reconocer, expresar y gestionar emociones tanto propias como ajenas. Estas capacidades son fundamentales para el desarrollo personal y la interacción social.

El desarrollo de estas habilidades comienza con el ámbito intrapersonal, siendo el autoconocimiento emocional el primer paso, que consiste en la habilidad para identificar lo que sentimos y por qué lo sentimos. Relacionada directamente con esta, se encuentra la autorregulación emocional, que es la capacidad para gestionar lo que sentimos adecuadamente, permitiendo responder de manera reflexiva en lugar de reaccionar impulsivamente.

En el ámbito interpersonal, la empatía juega un papel crucial, pues implica comprender y ponerse en el lugar del otro, lo cual es esencial para construir relaciones sólidas. Esta comprensión se complementa con la comunicación asertiva, un estilo que permite expresar opiniones con respeto y claridad sin recurrir a la agresión o a la represión de los sentimientos.

Un aspecto central de las habilidades sociales es el manejo de conflictos, entendido como el proceso para resolver desacuerdos de forma pacífica. Para que esta resolución sea efectiva, es necesario escuchar activamente y dialogar con la otra parte, lo cual facilita la búsqueda de acuerdos y soluciones en conjunto. En situaciones de alta tensión, puede ser útil recurrir a la mediación en un conflicto, que implica la intervención neutral para facilitar el acuerdo entre las partes involucradas.

Finalmente, en contextos de colaboración, la habilidad que más favorece el trabajo en equipo es la de cooperar y coordinar tareas con otros, construyendo un ambiente de respeto y productividad mutua.`,

  preguntas: [

    // 1 → correcta en posición 0
    {
      q: '¿Qué son las habilidades socioemocionales?',
      opciones: [
        'Capacidades para reconocer, expresar y gestionar emociones', // correcta (0)
        'Técnicas para resolver ecuaciones',
        'Métodos para memorizar más rápido',
        'Actividades exclusivamente físicas'
      ],
      correcta: 0
    },

    // 2 → correcta en posición 3
    {
      q: '¿Qué es el manejo de conflictos?',
      opciones: [
        'Imponer siempre tu punto de vista',
        'Ignorar los problemas hasta desaparecerlos',
        'Evitar el diálogo con otros',
        'Proceso para resolver desacuerdos de forma pacífica' // correcta (3)
      ],
      correcta: 3
    },

    // 3 → correcta en posición 3
    {
      q: '¿Qué es la autorregulación emocional?',
      opciones: [
        'Reprimir emociones sin expresarlas',
        'Reaccionar impulsivamente',
        'Culpar a otros por lo que sentimos',
        'Capacidad para gestionar lo que sentimos adecuadamente' // correcta (3)
      ],
      correcta: 3
    },

    // 4 → correcta en posición 1
    {
      q: '¿Qué es la empatía?',
      opciones: [
        'Adivinar lo que otros piensan',
        'Comprender y ponerse en el lugar del otro', // correcta (1)
        'Ocuparse solo de uno mismo',
        'Hablar sin escuchar'
      ],
      correcta: 1
    },

    // 5 → correcta en posición 2
    {
      q: '¿Cuál es un ejemplo de comunicación asertiva?',
      opciones: [
        'Gritar para que te escuchen',
        'Guardarte todo lo que sientes',
        'Expresar opiniones con respeto y claridad', // correcta (2)
        'Interrumpir para no perder tiempo'
      ],
      correcta: 2
    },

    // 6 → correcta en posición 1
    {
      q: '¿Qué ayuda a resolver conflictos de manera efectiva?',
      opciones: [
        'Culpar a otros siempre',
        'Escuchar activamente y dialogar', // correcta (1)
        'Evitar toda conversación',
        'Responder con agresividad'
      ],
      correcta: 1
    },

    // 7 → correcta en posición 0
    {
      q: '¿Qué es el autoconocimiento emocional?',
      opciones: [
        'Identificar lo que sentimos y por qué', // correcta (0)
        'Ignorar emociones negativas',
        'Actuar sin pensar',
        'Confiar solo en impulsos'
      ],
      correcta: 0
    },

    // 8 → correcta en posición 3
    {
      q: '¿Qué es la mediación en un conflicto?',
      opciones: [
        'Tomar partido y apoyar solo a un lado',
        'Imponer una regla sin escuchar a nadie',
        'Estallar emocionalmente',
        'Intervención neutral para facilitar el acuerdo' // correcta (3)
      ],
      correcta: 3
    },

    // 9 → correcta en posición 2
    {
      q: '¿Qué habilidad favorece el trabajo en equipo?',
      opciones: [
        'Evitar comunicar ideas',
        'Competir todo el tiempo',
        'Cooperar y coordinar tareas con otros', // correcta (2)
        'Interrumpir constantemente'
      ],
      correcta: 2
    },

    // 10 → correcta en posición 0
    {
      q: '¿Qué favorece la resolución pacífica de conflictos?',
      opciones: [
        'Buscar acuerdos y soluciones en conjunto', // correcta (0)
        'Imponer castigos',
        'Reaccionar con enojo',
        'Pensar solo en ganar'
      ],
      correcta: 0
    }

  ]
},

   { id: 'Cálculo Diferencial',
  guia:
`El Cálculo Diferencial es la rama de las matemáticas que se centra en el estudio del cambio, particularmente en la tasa de cambio instantánea de las funciones.Funciones, Límites y ContinuidadToda función matemática se define sobre un dominio, que representa el conjunto de todos los valores posibles y permitidos para la variable de entrada ($x$).Un concepto previo esencial es el límite, el cual describe el valor al que se aproxima una función a medida que su variable de entrada se acerca a un punto específico.Una función es considerada continua si, al trazar su gráfica, no se encuentran saltos ni interrupciones, lo que significa que el valor de la función coincide con su límite en cualquier punto.La Derivada como Tasa de CambioEl concepto central del Cálculo Diferencial es la derivada. La operación de derivar una función consiste en encontrar su tasa de cambio o la pendiente de la recta tangente en cualquier punto de su curva. Esta tasa se conoce formalmente como la tasa de cambio instantánea.La derivada es una herramienta poderosa que permite calcular puntos críticos, como los máximos y mínimos de una función, algo crucial para la optimización.Reglas de DerivaciónPara calcular estas tasas de cambio, se aplican reglas específicas:Cuando se tiene una función constante, es decir, que no depende de la variable $x$, su derivada es siempre cero.Para funciones que son una potencia de $x$, como por ejemplo, $x$ elevado al cuadrado (o $x^2$), la regla indica que el resultado es el exponente original multiplicado por $x$ y con el exponente reducido en uno (resultando en $2x$).Esta misma regla se aplica a funciones con exponentes negativos o fraccionarios. Por ejemplo, si se tiene la función $x$ a la potencia menos uno ($x^{-1}$), su derivada será el exponente negativo multiplicado por $x$ y con el nuevo exponente reducido en uno, lo que lleva a la forma $-1$ dividido por $x$ al cuadrado (o $-1/x^2$).En el caso de la raíz cuadrada de $x$, el proceso de derivación resulta en una expresión que es uno dividido por dos veces la raíz cuadrada de $x$.`,

  preguntas: [

    // 1 → correcta posición 3
    {
      q: '¿Qué es el dominio de una función?',
      opciones: [
        'El resultado de la función',
        'El conjunto de imágenes posibles',
        'El rango total',
        'El conjunto de valores permitidos para x' // correcta
      ],
      correcta: 3
    },

    // 2 → correcta posición 1
    {
      q: '¿Qué representa la derivada de una función?',
      opciones: [
        'La suma de sus valores',
        'La tasa de cambio instantánea', // correcta
        'La pendiente promedio',
        'El valor máximo de la función'
      ],
      correcta: 1
    },

    // 3 → correcta posición 1
    {
      q: '¿Qué expresa el límite de una función?',
      opciones: [
        'El valor más grande de la función',
        'El valor al que se aproxima la función', // correcta
        'El área bajo la curva',
        'La cantidad de derivadas posibles'
      ],
      correcta: 1
    },

    // 4 → correcta posición 0
    {
      q: '¿Cuál es la derivada de f(x) = x²?',
      opciones: [
        '2x', // correcta (0)
        'x³',
        '2',
        '1/x'
      ],
      correcta: 0
    },

    // 5 → correcta posición 2
    {
      q: '¿Cuál es la derivada de una constante?',
      opciones: [
        'La misma constante',
        'Depende del valor de x',
        'Cero', // correcta
        'Infinito'
      ],
      correcta: 2
    },

    // 6 → correcta posición 3
    {
      q: 'Una función es continua cuando:',
      opciones: [
        'Tiene varias derivadas',
        'No tiene máximos',
        'Los límites laterales no existen',
        'No presenta saltos ni interrupciones' // correcta
      ],
      correcta: 3
    },

    // 7 → correcta posición 1
    {
      q: '¿Qué significa “derivar” una función?',
      opciones: [
        'Simplificar su ecuación',
        'Encontrar su tasa de cambio o pendiente', // correcta
        'Resolver una integral',
        'Encontrar raíces reales'
      ],
      correcta: 1
    },

    // 8 → correcta posición 3
    {
      q: 'La derivada de √x es:',
      opciones: [
        'x²',
        '1/x²',
        'x^(1/2)',
        '(1)/(2√x)' // correcta
      ],
      correcta: 3
    },

    // 9 → correcta posición 2
    {
      q: '¿Cuál es la derivada de x⁻¹?',
      opciones: [
        '-x',
        '1/x',
        '-1/x²', // correcta
        'x²'
      ],
      correcta: 2
    },

    // 10 → correcta posición 0
    {
      q: 'Las derivadas permiten calcular:',
      opciones: [
        'Máximos y mínimos', // correcta (0)
        'La integral definida',
        'El área bajo la curva',
        'El dominio de una función'
      ],
      correcta: 0
    }

  ]
},

   { id: 'Conmutación y Enrutamiento de Redes',
  guia:
`Dispositivos y Tráfico de Datos
En una red de área local (LAN), el tráfico es gestionado principalmente por el switch. La función principal de este dispositivo es conmutar tramas para el movimiento eficiente de datos dentro de la misma LAN.

En contraste, el router es el dispositivo clave para la interconectividad entre distintas redes. Su función principal es dirigir paquetes entre redes diferentes, tomando decisiones sobre el mejor camino a seguir para que el tráfico llegue a su destino fuera de la red local.

Para que la comunicación ocurra, los dispositivos necesitan identificarse. La dirección IP privada es aquella usada únicamente dentro de la red local y no es visible desde Internet, protegiendo así la red interna. La máscara de subred complementa a la dirección IP al determinar cuántos hosts y redes se pueden crear dentro de un segmento IP específico. Además, el protocolo ARP (Address Resolution Protocol) juega un papel crucial al resolver direcciones IP a direcciones MAC físicas.

Protocolos de Enrutamiento
Los routers utilizan protocolos de enrutamiento para aprender las rutas disponibles y tomar decisiones. Estos protocolos se clasifican según su método para determinar la mejor ruta:

RIP (Routing Information Protocol) es un protocolo de vector de distancia, que basa sus decisiones en el número de saltos (el número de routers intermedios).

OSPF (Open Shortest Path First) es un protocolo de estado de enlace, cuyo nombre se traduce como "Ruta Abierta Más Corta Primero". A diferencia de RIP, OSPF calcula el "coste" de una ruta basándose principalmente en el ancho de banda disponible del enlace.

Segmentación y Comandos
Para mejorar la seguridad, la administración y la eficiencia de la red, se utiliza la segmentación lógica a través de VLAN (Virtual Local Area Networks). En una VLAN, los dispositivos se agrupan por esta segmentación lógica, independientemente de dónde estén conectados físicamente al switch.

Finalmente, en entornos de red Cisco, para examinar la información de enrutamiento que el router ha aprendido y utiliza, el comando fundamental es show ip route, el cual muestra la tabla de enrutamiento actual del dispositivo.`,

  preguntas: [

    // 1 → posición correcta 1
    {
      q: '¿Qué hace un switch dentro de una red?',
      opciones: [
        'Envía paquetes fuera de la red local',
        'Conmuta tramas dentro de una LAN', // correcta
        'Asigna direcciones IP públicas',
        'Realiza NAT'
      ],
      correcta: 1
    },

    // 2 → posición correcta 2
    {
      q: '¿Qué función principal tiene un router?',
      opciones: [
        'Aumentar la velocidad del CPU',
        'Dirigir paquetes entre redes diferentes',
        'Transferir únicamente tramas dentro de una LAN',
        'Crear archivos de configuración'
      ],
      correcta: 2
    },

    // 3 → posición correcta 0
    {
      q: '¿Qué tipo de protocolo es RIP?',
      opciones: [
        'De vector de distancia', // correcta
        'De estado de enlace',
        'De capa física',
        'De control de acceso'
      ],
      correcta: 0
    },

    // 4 → posición correcta 1
    {
      q: '¿Qué determina la máscara de subred?',
      opciones: [
        'Velocidad del enlace',
        'Cuántos hosts y redes puedes crear', // correcta
        'La marca del router',
        'La potencia de señal'
      ],
      correcta: 1
    },

    // 5 → posición correcta 0
    {
      q: '¿Qué protocolo utiliza “coste” basado en el ancho de banda?',
      opciones: [
        'OSPF', // correcta
        'RIP',
        'EIGRP',
        'FTP'
      ],
      correcta: 0
    },

    // 6 → posición correcta 0
    {
      q: 'En una VLAN, los dispositivos se agrupan por:',
      opciones: [
        'Segmentación lógica', // correcta
        'Color del cable',
        'Marca del dispositivo',
        'Velocidad del usuario'
      ],
      correcta: 0
    },

    // 7 → posición correcta 2
    {
      q: '¿Qué comando muestra la tabla de enrutamiento en un router Cisco?',
      opciones: [
        'show vlan',
        'show mac-address-table',
        'show ip route', // correcta
        'show arp'
      ],
      correcta: 2
    },

    // 8 → posición correcta 3
    {
      q: '¿Qué es una dirección IP privada?',
      opciones: [
        'Una dirección asignada por el ISP',
        'Una dirección visible desde Internet',
        'Una dirección requerida para NAT estático',
        'Una dirección usada solo dentro de la red local' // correcta
      ],
      correcta: 3
    },

    // 9 → posición correcta 3
    {
      q: '¿Qué hace el protocolo ARP?',
      opciones: [
        'Asigna IP a los hosts',
        'Encuentra routers cercanos',
        'Entrega paquetes entre redes públicas',
        'Resuelve direcciones IP a MAC' // correcta
      ],
      correcta: 3
    },

    // 10 → posición correcta 2
    {
      q: '¿Qué significa OSPF?',
      opciones: [
        'Open Simple Protocol Function',
        'Only Secure Packet Forwarding',
        'Open Shortest Path First', // correcta
        'Open System Process Flow'
      ],
      correcta: 2
    }

  ]
},

    { id: 'Probabilidad y Estadística',
  guia:
`La probabilidad es la medida de la posibilidad de que ocurra un evento y siempre se expresa con un valor entre 0 y 1. Un evento imposible siempre tendrá una probabilidad de 0, mientras que un evento seguro tendrá una probabilidad de 1. Cuando la probabilidad se determina a partir de la observación repetida de un evento, se denomina probabilidad frecuencial.

El Experimento Aleatorio y las Variables
Un experimento aleatorio es un proceso cuyo resultado no puede predecirse con certeza antes de realizarse. Los resultados de estos experimentos son capturados por variables aleatorias. Una variable aleatoria discreta es aquella que toma valores separados y contables, como el número de veces que sale "cara" al lanzar una moneda.

Medidas de Tendencia Central
En estadística, las medidas de tendencia central se utilizan para describir el valor típico o central de un conjunto de datos:

La media es el promedio de todos los valores del conjunto de datos, obtenido al sumar todos los valores y dividirlos entre el número total de datos.

La mediana es el valor central que se encuentra justo en medio cuando todos los datos han sido ordenados de menor a mayor.

La moda es el valor que más se repite o que tiene la mayor frecuencia dentro del conjunto.

Medida de Dispersión
Más allá de la tendencia central, es crucial entender cómo se distribuyen los datos. La desviación estándar es la medida que representa el grado de dispersión de los datos respecto a la media, indicando qué tan alejados están típicamente los valores individuales del promedio general.`,

  preguntas: [

    // 1 → posición correcta 2
    {
      q: '¿Qué es la probabilidad?',
      opciones: [
        'La frecuencia de un suceso repetido',
        'Un número arbitrario elegido al azar',
        'La medida de posibilidad de que ocurra un evento', // correcta
        'La cantidad de datos en un estudio'
      ],
      correcta: 2
    },

    // 2 → posición correcta 1
    {
      q: 'Un evento seguro tiene probabilidad:',
      opciones: [
        '0.5',
        '1', // correcta
        'Menos de 0',
        'Mayor que 1'
      ],
      correcta: 1
    },

    // 3 → posición correcta 3
    {
      q: 'La media es:',
      opciones: [
        'El valor que más se repite',
        'El valor central de los datos',
        'El dato menor del conjunto',
        'El promedio de todos los valores' // correcta
      ],
      correcta: 3
    },

    // 4 → posición correcta 0
    {
      q: 'Un evento imposible tiene probabilidad:',
      opciones: [
        '0', // correcta
        '0.3',
        '1',
        '2'
      ],
      correcta: 0
    },

    // 5 → posición correcta 0
    {
      q: 'La mediana es:',
      opciones: [
        'El valor central cuando los datos están ordenados', // correcta
        'La suma de todos los datos',
        'El dato más frecuente',
        'El mayor valor del conjunto'
      ],
      correcta: 0
    },

    // 6 → posición correcta 0
    {
      q: 'La moda es:',
      opciones: [
        'El valor que más se repite', // correcta
        'El promedio',
        'El número total de datos',
        'El valor más pequeño'
      ],
      correcta: 0
    },

    // 7 → posición correcta 1
    {
      q: '¿Qué tipo de probabilidad se basa en la observación repetida de un evento?',
      opciones: [
        'Probabilidad clásica',
        'Probabilidad frecuencial', // correcta
        'Probabilidad subjetiva',
        'Probabilidad empírica basada en suposiciones'
      ],
      correcta: 1
    },

    // 8 → posición correcta 2
    {
      q: '¿Qué es un experimento aleatorio?',
      opciones: [
        'Un proceso donde siempre se conoce el resultado',
        'Un cálculo de valores esperados',
        'Un proceso cuyo resultado no puede predecirse con certeza', // correcta
        'Un experimento donde todos los resultados son iguales'
      ],
      correcta: 2
    },

    // 9 → posición correcta 1
    {
      q: 'Una variable aleatoria discreta:',
      opciones: [
        'Toma valores dentro de un intervalo continuo',
        'Toma valores separados y contables', // correcta
        'No puede representarse numéricamente',
        'Es únicamente teórica'
      ],
      correcta: 1
    },

    // 10 → posición correcta 3
    {
      q: '¿Qué representa la desviación estándar?',
      opciones: [
        'La probabilidad total del conjunto',
        'La suma de las frecuencias',
        'El valor que más se repite',
        'El grado de dispersión de los datos respecto a la media' // correcta
      ],
      correcta: 3
    }

  ]
},

    { id: 'Programación Estructurada',
  guia:
`El pilar de la programación es el algoritmo, que se define como un conjunto ordenado de pasos para resolver un problema específico. La forma en que se estructura este proceso, conocida como programación estructurada, se basa en tres pilares fundamentales: secuencias, decisiones y ciclos.

Para representar visualmente este proceso lógico, se utiliza un diagrama de flujo, que plasma el proceso lógico de un algoritmo mediante símbolos estandarizados.

Elementos de Almacenamiento
Dentro de un programa, la información se maneja mediante variables y constantes. Una variable es un espacio en la memoria de la computadora cuyo valor puede cambiar durante la ejecución del programa. En contraste, una constante es un valor que no cambia en ningún momento a lo largo de la ejecución.

Estructuras de Control
La programación estructurada utiliza sentencias de control para dirigir el flujo de la lógica:

Estructuras Condicionales: La estructura condicional IF es la herramienta primaria para tomar decisiones basado en una condición lógica. Una variación más avanzada es la estructura SWITCH, que se utiliza para evaluar múltiples casos según el valor de una única expresión o variable.

Estructuras Repetitivas (Ciclos): Los ciclos permiten la automatización de tareas:

El ciclo FOR se utiliza para repetir un bloque un número determinado de veces, lo que lo hace ideal para iteraciones predecibles.

El ciclo WHILE se mantiene en ejecución mientras la condición sea verdadera, siendo útil cuando el número de repeticiones es indeterminado o dependiente de un evento externo.

Organización del Código
Para mantener el código limpio y eficiente, se utilizan las funciones. Una función es esencialmente un bloque de código que sirve para reutilizar bloques de código organizados y aislados, mejorando la modularidad y facilitando el mantenimiento.`,
  
  preguntas: [

    // 1 → posición correcta 0
    {
      q: '¿Qué es un algoritmo?',
      opciones: [
        'Un conjunto ordenado de pasos para resolver un problema', // correcta
        'Un tipo de variable',
        'Un lenguaje de programación',
        'Un error en el código'
      ],
      correcta: 0
    },

    // 2 → posición correcta 0
    {
      q: 'La programación estructurada se basa en:',
      opciones: [
        'Secuencias, decisiones y ciclos', // correcta
        'Solo en ciclos',
        'Solo en estructuras gráficas',
        'Solo en funciones avanzadas'
      ],
      correcta: 0
    },

    // 3 → posición correcta 1
    {
      q: 'La estructura condicional IF sirve para:',
      opciones: [
        'Repetir un bloque de instrucciones',
        'Tomar decisiones basado en una condición', // correcta
        'Detener la ejecución del programa',
        'Definir variables globales'
      ],
      correcta: 1
    },

    // 4 → posición correcta 0
    {
      q: 'Un ciclo FOR se utiliza para:',
      opciones: [
        'Repetir un bloque un número determinado de veces', // correcta
        'Tomar una decisión compleja',
        'Declarar constantes',
        'Convertir texto a números'
      ],
      correcta: 0
    },

    // 5 → posición correcta 2
    {
      q: 'Una variable es:',
      opciones: [
        'Un valor que nunca cambia',
        'Un tipo de ciclo',
        'Un espacio en memoria cuyo valor puede cambiar', // correcta
        'Una condición lógica'
      ],
      correcta: 2
    },

    // 6 → posición correcta 1
    {
      q: 'El ciclo WHILE se ejecuta mientras:',
      opciones: [
        'La variable sea constante',
        'La condición sea verdadera', // correcta
        'El programa esté detenido',
        'El usuario presione una tecla'
      ],
      correcta: 1
    },

    // 7 → posición correcta 3
    {
      q: 'Una constante es:',
      opciones: [
        'Un ciclo infinito',
        'Una condición booleana',
        'Un dato que puede modificarse',
        'Un valor que no cambia durante la ejecución' // correcta
      ],
      correcta: 3
    },

    // 8 → posición correcta 3
    {
      q: 'La estructura SWITCH se usa para:',
      opciones: [
        'Repetir instrucciones indefinidamente',
        'Guardar múltiples valores en una sola variable',
        'Detener un programa',
        'Evaluar múltiples casos según un valor' // correcta
      ],
      correcta: 3
    },

    // 9 → posición correcta 3
    {
      q: 'Un diagrama de flujo representa:',
      opciones: [
        'Solo texto sin formato',
        'Errores de sintaxis',
        'Datos almacenados en memoria',
        'El proceso lógico de un algoritmo mediante símbolos' // correcta
      ],
      correcta: 3
    },

    // 10 → posición correcta 2
    {
      q: 'Una función sirve para:',
      opciones: [
        'Aumentar el tamaño del archivo',
        'Detener el ciclo principal',
        'Reutilizar bloques de código organizados', // correcta
        'Eliminar variables innecesarias'
      ],
      correcta: 2
    }

  ]
},

    { id: 'Sistemas Operativos',
  guia: `El sistema operativo (SO) es el software principal que administra el hardware y los recursos de una computadora. Su corazón es el kernel (o núcleo), el componente que centraliza el control de recursos y operaciones del sistema. La función principal del SO es permitir la comunicación entre sus componentes, y para esto utiliza el driver (controlador), cuya función es permitir que el sistema operativo se comunique con el hardware específico del equipo.

Administración de Procesos y Multitarea
El SO gestiona el uso del CPU a través del administrador de procesos, cuya tarea principal es gestionar los procesos y su estado. Cuando un proceso está en estado de "ejecución", significa que está usando el CPU activamente para llevar a cabo sus tareas. La multitarea es una característica fundamental del SO que permite que varios procesos se ejecuten aparentemente a la vez, dando la impresión de que el sistema realiza múltiples tareas simultáneamente.

Gestión de Memoria y Almacenamiento
El sistema utiliza varios tipos de memoria para su funcionamiento:

La memoria RAM (Random Access Memory) se utiliza para guardar datos temporales mientras el sistema funciona, permitiendo un acceso rápido a la información que los programas están usando actualmente.

Cuando la memoria RAM se agota, el sistema puede recurrir a la memoria virtual, que cumple la función de simular memoria adicional usando el disco de almacenamiento, aunque a una velocidad mucho menor.

En cuanto al almacenamiento permanente, la fragmentación del disco es un problema que afecta principalmente a la velocidad de lectura y escritura de datos, ya que los archivos no están almacenados en bloques contiguos.

Tipos de Software
En términos de licencias, un sistema operativo de código abierto es aquel que permite ver y modificar su código fuente por cualquier usuario, fomentando la colaboración y la transparencia en su desarrollo.`,

  preguntas: [

    // 1 → posición correcta 1
    {
      q: '¿Qué es un sistema operativo?',
      opciones: [
        'El software principal que administra hardware y recursos', // correcta
        'Un componente físico del equipo',
        'Un programa de ofimática',
        'Un lenguaje de programación'
      ],
      correcta: 1
    },

    // 2 → posición correcta 0
    {
      q: '¿Para qué sirve el administrador de procesos?',
      opciones: [
        'Gestionar los procesos y su estado', // correcta
        'Diseñar bases de datos',
        'Editar imágenes',
        'Reemplazar al CPU'
      ],
      correcta: 0
    },

    // 3 → posición correcta 2
    {
      q: 'La memoria RAM se utiliza para:',
      opciones: [
        'Almacenar datos permanentemente',
        'Ejecutar programas desde el disco duro',
        'Guardar datos temporales mientras el sistema funciona', // correcta
        'Controlar la red física'
      ],
      correcta: 2
    },

    // 4 → posición correcta 0
    {
      q: 'Un proceso en estado "ejecución" significa que:',
      opciones: [
        'Está usando el CPU activamente', // correcta
        'Está detenido por error',
        'Está esperando ser cerrado',
        'Es un programa desinstalado'
      ],
      correcta: 0
    },

    // 5 → posición correcta 3
    {
      q: 'La función principal de un driver es:',
      opciones: [
        'Duplicar archivos',
        'Optimizar la velocidad del CPU',
        'Mejorar la interfaz gráfica',
        'Permitir que el sistema operativo se comunique con el hardware' // correcta
      ],
      correcta: 3
    },

    // 6 → posición correcta 0
    {
      q: 'La memoria virtual sirve para:',
      opciones: [
        'Simular memoria adicional usando el disco', // correcta
        'Incrementar la velocidad del procesador',
        'Eliminar procesos en segundo plano',
        'Crear accesos directos'
      ],
      correcta: 0
    },

    // 7 → posición correcta 1
    {
      q: 'La multitarea permite:',
      opciones: [
        'Eliminar procesos duplicados',
        'Que varios procesos se ejecuten aparentemente a la vez', // correcta
        'Aumentar la temperatura del CPU',
        'Evitar que un programa se cierre'
      ],
      correcta: 1
    },

    // 8 → posición correcta 0
    {
      q: 'El kernel del sistema operativo es:',
      opciones: [
        'El núcleo que controla recursos y operaciones del sistema', // correcta
        'Una aplicación gráfica',
        'Un programa descargable',
        'Un comando de red'
      ],
      correcta: 0
    },

    // 9 → posición correcta 2
    {
      q: 'La fragmentación del disco afecta principalmente:',
      opciones: [
        'A la tarjeta gráfica',
        'Al funcionamiento de la impresora',
        'A la velocidad de lectura y escritura en almacenamiento', // correcta
        'Al sonido del sistema'
      ],
      correcta: 2
    },

    // 10 → posición correcta 1
    {
      q: 'Un sistema operativo de código abierto es aquel que:',
      opciones: [
        'Solo funciona en dispositivos móviles',
        'Permite ver y modificar su código fuente', // correcta
        'Es exclusivo de una sola marca',
        'No puede instalar aplicaciones'
      ],
      correcta: 1
    }

  ]
},

   { id: 'Inglés II',
  guia: `Esta guía resume las estructuras y usos correctos de los tiempos verbales básicos y las frases cotidianas esenciales en inglés, basándose en la sintaxis correcta.

Presente Simple (Simple Present)
El presente simple se utiliza para hablar de hábitos, rutinas y hechos generales. Su estructura básica en oraciones afirmativas es: Sujeto + verbo base + complemento.

Es fundamental recordar la regla de la tercera persona del singular (He, She, It): cuando el sujeto es singular, el verbo debe llevar una -s (o -es, según la terminación). La forma correcta del verbo es, por ejemplo, "He runs" (Él corre). De manera similar, para expresar rutinas como escuchar música todas las noches, se usa la forma "Pablo listens to music every night" (Pablo escucha música todas las noches).

Un ejemplo de oración correcta es: "Pablo goes to school every day".

Presente Continuo (Present Continuous)
El presente continuo se usa para describir acciones que están sucediendo en el momento de hablar (como "right now").

La estructura de este tiempo verbal requiere el uso del verbo "to be" como auxiliar más el gerundio del verbo principal: Sujeto + verbo "to be" + verbo en -ing + complemento.

Una oración correcta en presente continuo es: "Pablo is studying right now" (Pablo está estudiando justo ahora). La traducción correcta de "Pablo is learning English" es "Pablo está aprendiendo inglés".

Para formular preguntas en este tiempo verbal, el verbo "to be" se coloca al inicio de la frase, invirtiendo el orden con el sujeto, como en "Is Pablo eating?"

Pasado Simple y Frases Cotidianas
El pasado simple se utiliza para acciones que comenzaron y terminaron en un momento específico en el pasado. La estructura correcta de una oración en pasado simple utiliza la forma pasada del verbo (generalmente terminada en -ed para verbos regulares), como en "Pablo visited his grandmother yesterday".

Finalmente, las preguntas y frases de uso diario siguen reglas sintácticas específicas. Para preguntar la hora correctamente, la frase estándar es "What time is it?". Una expresión cotidiana común para despedirse es "See you later".`,

  preguntas: [

    // 1 → posición correcta 3
    {
      q: '¿Cuál es la estructura correcta del presente simple?',
      opciones: [
        'Sujeto + verbo base + complemento', // correcta (posición 3)
        'Verbo + sujeto + complemento',
        'Sujeto + verbo en -ing',
        'To + verbo + sujeto'
      ],
      correcta: 3
    },

    // 2 → posición correcta 3
    {
      q: 'Selecciona la oración correcta:',
      opciones: [
        'Pablo goes to school every day', // correcta
        'Pablo go to school every day',
        'Pablo going to school every day',
        'Pablo is go to school'
      ],
      correcta: 3
    },

    // 3 → posición correcta 3
    {
      q: '¿Qué oración está en presente continuo?',
      opciones: [
        'Pablo is studying right now', // correcta
        'Pablo study on weekends',
        'Pablo studied yesterday',
        'Pablo has study now'
      ],
      correcta: 3
    },

    // 4 → posición correcta 3
    {
      q: 'Escoge la pregunta correcta en inglés:',
      opciones: [
        'Is Pablo eating?', // correcta
        'Pablo is eating?',
        'Eating Pablo is?',
        'Do eating Pablo?'
      ],
      correcta: 3
    },

    // 5 → posición correcta 2
    {
      q: '¿Cuál de las siguientes es una expresión cotidiana común?',
      opciones: [
        'See you later', // correcta (posición 2)
        'Went to later',
        'Seeing later',
        'Later you seen'
      ],
      correcta: 2
    },

    // 6 → posición correcta 2
    {
      q: 'Selecciona la traducción correcta: "Pablo is learning English."',
      opciones: [
        'Pablo está aprendiendo inglés', // correcta
        'Pablo aprende inglés cada año',
        'Pablo aprendió inglés',
        'Pablo aprenderá inglés'
      ],
      correcta: 2
    },

    // 7 → posición correcta 2
    {
      q: '¿Cuál es la forma correcta del verbo en tercera persona?',
      opciones: [
        'He runs', // correcta
        'He run',
        'He running',
        'He is run'
      ],
      correcta: 2
    },

    // 8 → posición correcta 1
    {
      q: 'Completa: "Pablo ____ to music every night."',
      opciones: [
        'listens', // correcta (posición 1)
        'listening',
        'listen',
        'is listened'
      ],
      correcta: 1
    },

    // 9 → posición correcta 1
    {
      q: '¿Cómo preguntas por la hora correctamente?',
      opciones: [
        '"What time is it?"', // correcta
        '"What hour is?"',
        '"Time what is it?"',
        '"Is what time?"'
      ],
      correcta: 1
    },

    // 10 → posición correcta 0
    {
      q: 'Elige la oración en pasado simple:',
      opciones: [
        'Pablo visited his grandmother yesterday', // correcta (posición 0)
        'Pablo visits his grandmother yesterday',
        'Pablo is visiting his grandmother yesterday',
        'Pablo visit his grandmother yesterday'
      ],
      correcta: 0
    }

  ]
}

  ]
},

 3: {
  nombre: 'Tercer Cuatrimestre',
  materias: [
   { id: 'Desarrollo del pensamiento y toma de decisiones',
  guia: 
`El núcleo de la toma de decisiones efectiva reside en el pensamiento crítico, que se define como la capacidad de analizar información de forma objetiva y metódica. Este proceso requiere un pensamiento reflexivo, que implica analizar antes de actuar, en lugar de caer en una decisión impulsiva, que se toma sin reflexión previa.

Un buen proceso de toma de decisiones siempre incluye definir el problema y evaluar alternativas de manera estructurada. Una decisión razonada o racional implica inherentemente evaluar datos y consecuencias. Por lo tanto, un elemento clave para una decisión racional es evaluar información y alternativas disponibles, y evaluar las consecuencias antes de decidir sirve para tomar decisiones más responsables.

Influencia Emocional y Errores Mentales
Aunque la toma de decisiones debe ser principalmente racional, las emociones influyen en las decisiones porque pueden modificar la percepción de las opciones, sesgando el juicio.

Además, los humanos estamos sujetos a sesgos cognitivos. Un sesgo cognitivo es un error mental que distorsiona las decisiones, desviándolas de la objetividad. Un claro ejemplo de una mala decisión provocada por un sesgo es elegir algo solo porque otros lo eligen (sesgo de arrastre o de conformidad), en lugar de basarse en datos objetivos y evaluación propia.`,

  preguntas: [
    // 1 - correcta en posición 2
    {
      q: 'El pensamiento crítico se define como:',
      opciones: [
        'Analizar información de forma objetiva', // correcta (pos 2)
        'Tomar decisiones sin analizar',
        'Basarse solo en emociones',
        'Evitar reflexionar'
      ],
      correcta: 2
    },

    // 2 - correcta en posición 1
    {
      q: 'Un elemento clave para una decisión racional es:',
      opciones: [
        'Actuar por impulso',
        'Evaluar información y alternativas', // correcta (pos 1)
        'Ignorar los datos',
        'Elegir al azar'
      ],
      correcta: 1
    },

    // 3 - correcta en posición 3
    {
      q: 'Las emociones influyen en las decisiones porque:',
      opciones: [
        'Siempre eliminan el pensamiento lógico',
        'No afectan en nada',
        'Son irrelevantes',
        'Pueden modificar la percepción de las opciones' // correcta (pos 3)
      ],
      correcta: 3
    },

    // 4 - correcta en posición 3
    {
      q: 'Un sesgo cognitivo es:',
      opciones: [
        'Una regla matemática',
        'Un proceso totalmente objetivo',
        'Un fenómeno físico',
        'Un error mental que distorsiona decisiones' // correcta (pos 3)
      ],
      correcta: 3
    },

    // 5 - correcta en posición 1
    {
      q: 'Evaluar las consecuencias antes de decidir sirve para:',
      opciones: [
        'Elegir sin pensar',
        'Tomar decisiones más responsables', // correcta (pos 1)
        'Crear más sesgos',
        'Actuar impulsivamente'
      ],
      correcta: 1
    },

    // 6 - correcta en posición 0
    {
      q: 'Una decisión impulsiva se caracteriza por:',
      opciones: [
        'Tomarse sin reflexión', // correcta (pos 0)
        'Analizar a profundidad',
        'Comparar alternativas',
        'Evaluar consecuencias'
      ],
      correcta: 0
    },

    // 7 - correcta en posición 2
    {
      q: 'Pensamiento reflexivo significa:',
      opciones: [
        'Actuar rápido sin pensar',
        'Elegir por emoción',
        'Analizar antes de actuar', // correcta (pos 2)
        'Hacer lo que otros dicen'
      ],
      correcta: 2
    },

    // 8 - correcta en posición 0
    {
      q: 'Una decisión razonada implica:',
      opciones: [
        'Evaluar datos y consecuencias', // correcta (pos 0)
        'Seguir impulsos',
        'Ignorar alternativas',
        'Actuar sin información'
      ],
      correcta: 0
    },

    // 9 - correcta en posición 0
    {
      q: 'Un ejemplo de mala decisión por sesgo es:',
      opciones: [
        'Elegir algo solo porque otros lo eligen', // correcta (pos 0)
        'Comparar opciones objetivamente',
        'Evaluar pros y contras',
        'Revisar información confiable'
      ],
      correcta: 0
    },

    // 10 - correcta en posición 1
    {
      q: 'Un buen proceso de toma de decisiones incluye:',
      opciones: [
        'Actuar sin analizar',
        'Definir el problema y evaluar alternativas', // correcta (pos 1)
        'Evitar información',
        'Decidir al azar'
      ],
      correcta: 1
    }
  ]
},

   { id: 'Calculo Integral',
  guia:
`El Cálculo Integral es una rama de las matemáticas que se fundamenta en la relación inversa con el cálculo diferencial. De hecho, la derivada y la integral están relacionadas porque la integral es la operación inversa de la derivada. Esta relación fundamental es establecida por el Teorema Fundamental del Cálculo, que establece que derivar e integrar son procesos inversos.Tipos de Integrales y sus AplicacionesEl proceso de integración se divide en dos categorías principales:Integral Definida: Se utiliza para determinar el área exacta entre un intervalo de una función. El área bajo la curva se obtiene precisamente mediante una integral definida.Integral Indefinida: Representa una familia de funciones antiderivadas de la función original. Al ser una familia y no un valor único, se debe añadir una constante de integración al resultado, ya que la antiderivada no es única (la derivada de cualquier constante es cero, por lo tanto, esa constante se "pierde" al derivar y debe reincorporarse al integrar).Un concepto más avanzado es la integral impropia, que se caracteriza por tener límites infinitos o discontinuidades dentro del intervalo de integración.Métodos y PropiedadesUna propiedad básica de integrales es la linealidad ($\int(af + bg) = a\int f + b\int g$), lo que significa que la integral de una suma de funciones es igual a la suma de las integrales de dichas funciones, y las constantes pueden salir del signo de integración.Cuando se enfrentan integrales complejas, se recurre a métodos específicos:El método de sustitución se usa para simplificar integrales complejas, haciendo un cambio de variable que convierte la integral en una forma más fácil de resolver.El método de integración por partes es necesario cuando la función a integrar es el producto de funciones ($u \cdot v$), y se basa en la regla del producto de la derivación.`,

  preguntas: [
    // 1 - correcta posición 2
    {
      q: 'Una integral indefinida representa:',
      opciones: [
        'Una familia de funciones antiderivadas', // correcta (pos 2)
        'Un área fija',
        'Una ecuación algebraica',
        'Una derivada'
      ],
      correcta: 2
    },

    // 2 - correcta posición 3
    {
      q: 'El área bajo la curva se obtiene mediante:',
      opciones: [
        'Una derivada',
        'Una ecuación lineal',
        'Una resta de funciones',
        'Una integral definida' // correcta (pos 3)
      ],
      correcta: 3
    },

    // 3 - correcta posición 1
    {
      q: 'La derivada y la integral están relacionadas porque:',
      opciones: [
        'Son procesos idénticos',
        'La integral es la operación inversa de la derivada', // correcta (pos 1)
        'Ambas disminuyen funciones',
        'Son operaciones sin relación'
      ],
      correcta: 1
    },

    // 4 - correcta posición 0
    {
      q: 'Una integral definida calcula:',
      opciones: [
        'El área exacta entre un intervalo', // correcta (pos 0)
        'Una familia de funciones',
        'Una derivada parcial',
        'Solo funciones lineales'
      ],
      correcta: 0
    },

    // 5 - correcta posición 2
    {
      q: 'Una propiedad básica de integrales es:',
      opciones: [
        'No pueden sumarse',
        'No aceptan constantes',
        'Linealidad: ∫(af + bg) = a∫f + b∫g', // correcta (pos 2)
        'Siempre son negativas'
      ],
      correcta: 2
    },

    // 6 - correcta posición 3
    {
      q: 'El método de sustitución se usa para:',
      opciones: [
        'Sumar polinomios',
        'Resolver ecuaciones de segundo grado',
        'Derivar más rápido',
        'Simplificar integrales complejas' // correcta (pos 3)
      ],
      correcta: 3
    },

    // 7 - correcta posición 2
    {
      q: 'El método de integración por partes se usa cuando:',
      opciones: [
        'La función es constante',
        'La función tiene raíces',
        'Es producto de funciones (u·v)', // correcta (pos 2)
        'No existe integral'
      ],
      correcta: 2
    },

    // 8 - correcta posición 3
    {
      q: 'El teorema fundamental del cálculo establece que:',
      opciones: [
        'Toda derivada es cero',
        'Las integrales no existen',
        'Solo sirve para polinomios',
        'Derivar e integrar son procesos inversos' // correcta (pos 3)
      ],
      correcta: 3
    },

    // 9 - correcta posición 2
    {
      q: 'Una constante de integración se añade porque:',
      opciones: [
        'Hace la ecuación más bonita',
        'Es parte de la derivada',
        'La antiderivada no es única', // correcta (pos 2)
        'La integral no existe sin ella'
      ],
      correcta: 2
    },

    // 10 - correcta posición 3
    {
      q: 'Una integral impropia se caracteriza por:',
      opciones: [
        'Ser siempre negativa',
        'Tener solo límites iguales',
        'Usarse solo en física',
        'Límites infinitos o discontinuidades' // correcta (pos 3)
      ],
      correcta: 3
    }
  ]
},

    { id: 'Tópicos de calidad para el diseño de software',
  guia:
`La calidad de software se refiere a qué tan bien cumple los requisitos y funciona correctamente un sistema, satisfaciendo las necesidades para las que fue diseñado. Una característica esencial de esta calidad es la confiabilidad del sistema, que asegura que operará sin fallas durante un período de tiempo especificado.

Otro atributo crucial es la mantenibilidad en software, la cual se define como qué tan fácil es modificar y mejorar el sistema a lo largo del tiempo. Un código bien estructurado y fácil de mantener es indispensable para la longevidad de cualquier proyecto.

Pruebas y Documentación
Para garantizar la calidad, las pruebas de software son una práctica indispensable que permite detectar errores antes de liberar el producto a los usuarios finales.

Complementando el proceso de desarrollo, la documentación en un proyecto es importante porque facilita la comprensión y el mantenimiento del sistema por parte de futuros desarrolladores o colaboradores.

Una práctica que mejora consistentemente la calidad del producto es la de realizar revisiones de código, donde otros miembros del equipo examinan el código escrito para identificar posibles fallas o áreas de mejora.

Medición y Estándares
Para evaluar y mejorar la calidad de manera rigurosa, se utilizan métricas. Una métrica de calidad sirve para medir atributos del software de forma objetiva. Estas métricas son fundamentales para medir la calidad para tomar decisiones informadas sobre el futuro del producto.

En la ingeniería de software, se recurre a estándares internacionales para definir formalmente los atributos de calidad. Una norma común en ingeniería de software es la ISO/IEC 25010. Esta norma establece un modelo de calidad, y una de las características que evalúa es la usabilidad, es decir, qué tan fácil es para el usuario interactuar con el sistema.`,

  preguntas: [
    // 1 - pos 0
    {
      q: 'La calidad de software se refiere a:',
      opciones: [
        'Qué tan bien cumple los requisitos y funciona correctamente', // correcta
        'Que tenga muchos colores',
        'Que sea muy popular',
        'Que sea pesado el archivo'
      ],
      correcta: 0
    },

    // 2 - pos 2
    {
      q: 'Una característica importante de calidad es:',
      opciones: [
        'Cantidad de usuarios',
        'Publicidad del producto',
        'Confiabilidad del sistema', // correcta
        'Uso excesivo de animaciones'
      ],
      correcta: 2
    },

    // 3 - pos 3
    {
      q: 'Las pruebas de software permiten:',
      opciones: [
        'Aumentar tamaño de la app',
        'Evitar escribir documentación',
        'Hacer el software más pesado',
        'Detectar errores antes de liberar el producto' // correcta
      ],
      correcta: 3
    },

    // 4 - pos 1
    {
      q: 'La documentación en un proyecto es importante porque:',
      opciones: [
        'Hace el proyecto más grande',
        'Facilita comprensión y mantenimiento', // correcta
        'Aumenta el número de errores',
        'Evita que otros colaboren'
      ],
      correcta: 1
    },

    // 5 - pos 3
    {
      q: 'Una métrica de calidad sirve para:',
      opciones: [
        'Contar cuántas personas descargan la app',
        'Agregar efectos visuales',
        'Eliminar código innecesario por intuición',
        'Medir atributos del software de forma objetiva' // correcta
      ],
      correcta: 3
    },

    // 6 - pos 0
    {
      q: 'La mantenibilidad en software significa:',
      opciones: [
        'Qué tan fácil es modificar y mejorar el sistema', // correcta
        'Que no se pueda actualizar nunca',
        'Que el código sea confuso',
        'Que no tenga documentación'
      ],
      correcta: 0
    },

    // 7 - pos 2
    {
      q: 'Una práctica que mejora la calidad es:',
      opciones: [
        'Ignorar reportes de errores',
        'Evitar retroalimentación del usuario',
        'Realizar revisiones de código', // correcta
        'Eliminar comentarios útiles'
      ],
      correcta: 2
    },

    // 8 - pos 3
    {
      q: 'Una norma común en ingeniería de software es:',
      opciones: [
        'Usar variables con nombres confusos',
        'Evitar pruebas unitarias',
        'Trabajar sin control de versiones',
        'ISO/IEC 25010' // correcta
      ],
      correcta: 3
    },

    // 9 - pos 1
    {
      q: 'Las métricas ayudan a:',
      opciones: [
        'Hacer el proyecto más caro',
        'Medir calidad para tomar decisiones', // correcta
        'Aumentar tamaño del código',
        'Ignorar errores'
      ],
      correcta: 1
    },

    // 10 - pos 2
    {
      q: 'Una característica evaluada por ISO/IEC 25010 es:',
      opciones: [
        'Cantidad de colores en la app',
        'Peso del archivo',
        'Usabilidad', // correcta
        'Número de descargas'
      ],
      correcta: 2
    }
  ]
},

   { id: 'Bases de Datos',
  guia:
`Una base de datos es fundamentalmente un conjunto organizado de información que se gestiona mediante un Sistema de Gestión de Bases de Datos (SGBD). Una de las grandes ventajas de usar un SGBD es que ayuda a mejorar la integridad y seguridad de los datos almacenados.

Estructura y Modelo Relacional
El modelo de datos es el plano conceptual que describe la estructura lógica de los datos y las relaciones entre ellos. Una base de datos relacional organiza la información en tablas con filas y columnas, donde cada fila representa un registro y cada columna un atributo.

Dentro de este modelo, existen dos elementos clave para el manejo de identidades y relaciones:

Llave Primaria: Es un identificador único por registro (fila) dentro de una tabla, asegurando que cada entrada sea única.

Llave Foránea: Es un atributo esencial que sirve para relacionar tablas entre sí, enlazando un registro de una tabla con el registro identificado por la llave primaria en otra tabla.

Esta estructura de llaves permite establecer la integridad referencial, que es el principio que garantiza que las relaciones entre tablas sean válidas y consistentes, evitando enlaces rotos o datos inconsistentes.

Gestión y Consulta con SQL
El lenguaje SQL (Structured Query Language) es el estándar utilizado para gestionar y consultar bases de datos. SQL proporciona comandos para manipular la estructura y los datos:

El comando INSERT se utiliza para agregar nuevos registros (filas) a una tabla.

La consulta SELECT es el comando básico y más frecuente, sirviendo para obtener información de una tabla o de múltiples tablas relacionadas.`,

  preguntas: [
    // 1 - pos 0
    {
      q: '¿Qué es una base de datos?',
      opciones: [
        'Un conjunto organizado de información', // correcta
        'Una carpeta sin archivos',
        'Un documento de texto simple',
        'Un archivo aleatorio'
      ],
      correcta: 0
    },

    // 2 - pos 1
    {
      q: 'Una ventaja de un SGBD es:',
      opciones: [
        'Aumentar el consumo de almacenamiento',
        'Mejorar la integridad y seguridad de los datos', // correcta
        'Duplicar la información innecesariamente',
        'Eliminar la necesidad de respaldos'
      ],
      correcta: 1
    },

    // 3 - pos 2
    {
      q: 'Un modelo de datos describe:',
      opciones: [
        'Los colores de la aplicación',
        'La ubicación física del usuario',
        'La estructura lógica de los datos', // correcta
        'El diseño visual del programa'
      ],
      correcta: 2
    },

    // 4 - pos 3
    {
      q: '¿Qué es una llave primaria?',
      opciones: [
        'Un valor duplicado',
        'Un nombre repetido',
        'Un atributo opcional',
        'Un identificador único por registro' // correcta
      ],
      correcta: 3
    },

    // 5 - pos 1
    {
      q: 'Una llave foránea sirve para:',
      opciones: [
        'Eliminar datos automáticamente',
        'Relacionar tablas entre sí', // correcta
        'Desordenar registros',
        'Evitar restricciones de integridad'
      ],
      correcta: 1
    },

    // 6 - pos 3
    {
      q: 'SQL se utiliza para:',
      opciones: [
        'Crear archivos de imagen',
        'Reproducir audio',
        'Hacer hojas de cálculo',
        'Gestionar y consultar bases de datos' // correcta
      ],
      correcta: 3
    },

    // 7 - pos 2
    {
      q: 'Una consulta SELECT sirve para:',
      opciones: [
        'Eliminar registros específicos',
        'Crear nuevas tablas',
        'Obtener información de una tabla', // correcta
        'Modificar la estructura de los campos'
      ],
      correcta: 2
    },

    // 8 - pos 0
    {
      q: 'La integridad referencial garantiza que:',
      opciones: [
        'Las relaciones entre tablas sean válidas', // correcta
        'Las tablas se creen sin estructura',
        'Los usuarios no puedan consultar datos',
        'Los datos cambien aleatoriamente'
      ],
      correcta: 0
    },

    // 9 - pos 1
    {
      q: 'El comando INSERT permite:',
      opciones: [
        'Eliminar toda una tabla',
        'Agregar nuevos registros', // correcta
        'Modificar columnas',
        'Crear índices'
      ],
      correcta: 1
    },

    // 10 - pos 0
    {
      q: 'Una base de datos relacional organiza la información en:',
      opciones: [
        'Tablas con filas y columnas', // correcta
        'Gráficas de barras',
        'Archivos de música',
        'Imágenes en alta resolución'
      ],
      correcta: 0
    }
  ]
},

   { id: 'Programación Orientada a Objetos',
  guia:
`La Programación Orientada a Objetos (POO) es un paradigma de programación que modela la realidad a través de la interacción entre entidades clave: clases y objetos.

Clases, Objetos y Estructura
La clase es el concepto central de POO y se define como una plantilla para crear objetos. El objeto es la manifestación concreta de esa plantilla, siendo una instancia de una clase con existencia real en la memoria del programa.

Cada clase y objeto se define por dos componentes:

Atributo: Representa una característica o dato del objeto, como su tamaño, color o nombre.

Método: Es una función dentro de una clase que define el comportamiento o las acciones que el objeto puede realizar.

Al momento de crear un objeto, se invoca el constructor, un método especial que sirve para inicializar los objetos y asignar valores iniciales a sus atributos. Dentro del código de la clase, la palabra reservada "this" se utiliza para referirse a los atributos del objeto actual, resolviendo cualquier ambigüedad.

Pilares Fundamentales de POO
La POO se basa en cuatro pilares conceptuales clave:

Encapsulamiento: Implica proteger datos mediante accesos controlados (generalmente a través de métodos públicos llamados getters y setters), ocultando la complejidad interna al mundo exterior.

Herencia: Permite que una clase hija derive atributos y métodos de otra clase padre, promoviendo la reutilización del código.

Polimorfismo: Significa "muchas formas" y permite dar distintos comportamientos a métodos con el mismo nombre en diferentes clases o contextos.

Sobrecarga de Métodos: Es una manifestación específica del polimorfismo que consiste en definir varios métodos con el mismo nombre pero con parámetros distintos (diferente número o tipo de argumentos) dentro de la misma clase.`,

  preguntas: [
    // 1 - pos 2
    {
      q: 'Una clase en POO es:',
      opciones: [
        'Una plantilla para crear objetos',           // correcta
        'Un archivo de texto',
        'Una variable sin valor',
        'Una imagen en memoria'
      ],
      correcta: 2
    },

    // 2 - pos 1
    {
      q: 'Encapsulamiento significa:',
      opciones: [
        'Heredar atributos de otra clase',
        'Proteger datos mediante accesos controlados', // correcta
        'Eliminar métodos privados',
        'Convertir un objeto en variable'
      ],
      correcta: 1
    },

    // 3 - pos 0
    {
      q: 'Un objeto es:',
      opciones: [
        'Una instancia de una clase',                  // correcta
        'Una base de datos',
        'Un método especial',
        'Un ciclo repetitivo'
      ],
      correcta: 0
    },

    // 4 - pos 0
    {
      q: 'Un constructor sirve para:',
      opciones: [
        'Inicializar objetos al crearse',              // correcta
        'Eliminar clases',
        'Reducir memoria al sistema',
        'Modificar permisos de usuario'
      ],
      correcta: 0
    },

    // 5 - pos 1
    {
      q: 'El polimorfismo permite:',
      opciones: [
        'Eliminar código duplicado',
        'Dar distintos comportamientos a métodos con el mismo nombre', // correcta
        'Crear solo una clase por archivo',
        'Modificar atributos privados'
      ],
      correcta: 1
    },

    // 6 - pos 2
    {
      q: 'Un método es:',
      opciones: [
        'La instancia de un objeto',
        'Una carpeta del proyecto',
        'Una función dentro de una clase', // correcta
        'Un tipo de variable estática'
      ],
      correcta: 2
    },

    // 7 - pos 3
    {
      q: 'La herencia permite:',
      opciones: [
        'Reducir velocidad del programa',
        'Convertir funciones en imágenes',
        'Crear archivos automáticamente',
        'Que una clase derive atributos y métodos de otra' // correcta
      ],
      correcta: 3
    },

    // 8 - pos 3
    {
      q: '¿Qué es sobrecarga de métodos?',
      opciones: [
        'Eliminar métodos no usados',
        'Cambiar métodos entre clases',
        'Clonar objetos automáticamente',
        'Definir varios métodos con el mismo nombre pero parámetros distintos' // correcta
      ],
      correcta: 3
    },

    // 9 - pos 1
    {
      q: 'Un atributo representa:',
      opciones: [
        'Una carpeta del sistema',
        'Una característica o dato del objeto', // correcta
        'Un archivo ejecutable',
        'Un ciclo repetitivo'
      ],
      correcta: 1
    },

    // 10 - pos 3
    {
      q: 'La palabra reservada "this" se usa para:',
      opciones: [
        'Crear nuevas clases',
        'Activar polimorfismo',
        'Heredar métodos',
        'Referirse a los atributos del objeto actual' // correcta
      ],
      correcta: 3
    }
  ]
},

   { id: 'Proyecto Integrador I',
  guia:
`Un proyecto integrador es una actividad educativa que reúne conocimientos de varias materias o disciplinas. Su finalidad principal es aplicar conocimientos en una solución real o tangible, demostrando la comprensión y el uso práctico de los conceptos aprendidos.

Fases, Requisitos y Metodología
El desarrollo de cualquier proyecto sigue un proceso estructurado. La fase de análisis del proyecto es crucial y sirve para comprender el problema y definir las necesidades que el producto final debe cubrir. Estas necesidades se traducen en requerimientos funcionales, que son aspectos que el sistema debe hacer obligatoriamente para cumplir su objetivo.

Para gestionar este proceso de manera eficiente, se utiliza una metodología de desarrollo, cuya función principal es organizar y planificar el proyecto. Un ejemplo de metodología ágil es Scrum, la cual se caracteriza por el trabajo en sprints (ciclos cortos e iterativos) y reuniones cortas para la coordinación diaria.

Entregables y Colaboración
Dentro del ciclo de vida del proyecto, se generan entregables, que son un avance documentado o prototipo que se presenta periódicamente para revisión.

El éxito del proyecto depende en gran medida del trabajo colaborativo, que implica que todos los integrantes deben aportar y coordinarse con el equipo para lograr un resultado coherente.

Presentación y Evaluación
La evaluación del proyecto integrador se enfoca principalmente en el cumplimiento de objetivos y la calidad del desarrollo del producto o solución.

La presentación final debe ser un resumen ejecutivo y formal que contenga: objetivo, desarrollo, resultados y conclusiones, demostrando la conexión entre el problema identificado en la fase de análisis y la solución entregada.`,

  preguntas: [
    // 1 - pos 2
    {
      q: '¿Qué es un proyecto integrador?',
      opciones: [
        'Una actividad que reúne conocimientos de varias materias', // correcta
        'Un examen tradicional individual',
        'Un documento sin aplicación práctica',
        'Una actividad sin relación con el plan de estudios'
      ],
      correcta: 2
    },

    // 2 - pos 3
    {
      q: 'La finalidad principal de un proyecto integrador es:',
      opciones: [
        'Repetir teoría sin aplicación',
        'Aplicar conocimientos en una solución real', // correcta
        'Eliminar materias sobrantes',
        'Crear documentos sin evaluación'
      ],
      correcta: 3
    },

    // 3 - pos 1
    {
      q: '¿Qué es un requerimiento funcional?',
      opciones: [
        'Un diseño visual opcional',
        'Un manual del usuario',
        'Algo que el sistema debe hacer obligatoriamente', // correcta
        'Una función no necesaria'
      ],
      correcta: 1
    },

    // 4 - pos 0
    {
      q: 'La fase de análisis del proyecto sirve para:',
      opciones: [
        'Comprender el problema y definir necesidades', // correcta
        'Generar archivos temporales',
        'Modificar permisos de red',
        'Eliminar información no usada'
      ],
      correcta: 0
    },

    // 5 - pos 1
    {
      q: 'El trabajo colaborativo implica:',
      opciones: [
        'Evitar la comunicación',
        'Ignorar retroalimentación',
        'Delegar todo en un integrante',
        'Aportar y coordinarse con el equipo' // correcta
      ],
      correcta: 1
    },

    // 6 - pos 0
    {
      q: 'Una metodología de desarrollo sirve para:',
      opciones: [
        'Organizar y planificar el proyecto', // correcta
        'Aumentar tamaño del código',
        'Eliminar fases del proceso',
        'Reducir comunicación del equipo'
      ],
      correcta: 0
    },

    // 7 - pos 0
    {
      q: 'Scrum se caracteriza por:',
      opciones: [
        'Trabajo en sprints y reuniones cortas', // correcta
        'Un solo entregable final',
        'Desarrollo sin roles',
        'Eliminación del análisis inicial'
      ],
      correcta: 0
    },

    // 8 - pos 2
    {
      q: 'Un entregable dentro del proyecto integrador puede ser:',
      opciones: [
        'Un archivo vacío',
        'Un documento sin propósito',
        'Un avance documentado o prototipo', // correcta
        'Cualquier archivo sin relación'
      ],
      correcta: 2
    },

    // 9 - pos 0
    {
      q: '¿Qué debe contener la presentación final del proyecto?',
      opciones: [
        'Objetivo, desarrollo, resultados y conclusiones', // correcta
        'Solo imágenes decorativas',
        'Un video sin contenido explicativo',
        'Requisitos no relacionados'
      ],
      correcta: 0
    },

    // 10 - pos 1
    {
      q: 'La evaluación del proyecto integrador se basa en:',
      opciones: [
        'El color del documento',
        'La extensión del archivo final',
        'Cumplimiento de objetivos y calidad del desarrollo', // correcta
        'La cantidad de imágenes usadas'
      ],
      correcta: 1
    }
  ]
},

    { id: 'Inglés III',
  guia:
`El Presente Simple (Simple Present)
El Presente Simple se utiliza para expresar hábitos, rutinas o hechos generales. La estructura correcta en la tercera persona del singular (He, She, It, o nombres propios como Josué) requiere añadir una -s al verbo.

La oración correcta sigue la forma: "Josué plays soccer every weekend."

Para formular preguntas en Presente Simple, se utiliza el auxiliar "Do / Does". Si el sujeto es tercera persona singular (Josué), se usa "Does". La pregunta correcta es: "Does Josué like pizza?" Es vital recordar que, al usar el auxiliar "Does," el verbo principal se mantiene en su forma base (sin la -s).

Adverbios de Frecuencia
Los adverbios de frecuencia describen con qué periodicidad ocurre una acción. El adverbio "usually" expresa algo que sucede a menudo. La colocación correcta de estos adverbios varía:

Con el verbo "to be": El adverbio se coloca después del verbo "to be". Por ejemplo: "Josué is always late."

El Presente Continuo (Present Continuous)
El Presente Continuo se forma con la estructura: Sujeto + verbo "to be" + verbo en -ing. Se usa principalmente para acciones que ocurren en el momento de hablar, como en "Josué is studying right now."

Sin embargo, el Presente Continuo también se utiliza para hablar sobre el futuro, expresando un arreglo planeado o un acuerdo confirmado. Por ejemplo, la oración "Josué is meeting his friend tomorrow" se refiere a un plan futuro ya concertado.

Expresando el Futuro
Para expresar planes futuros que no están tan formalmente concertados como un acuerdo (como los cubiertos por el Presente Continuo) o para expresar intenciones, se utiliza la forma "going to".

La estructura correcta es: Sujeto + verbo "to be" + going to + verbo base.

Un ejemplo correcto de un plan futuro es: "Josué is going to study tomorrow."

Preguntas con el Verbo "To Be"
Cuando el verbo principal de la oración es el verbo "to be" (am, is, are), no se necesita el auxiliar "Do/Does" para formular preguntas. El verbo "to be" se mueve al inicio de la frase, como en la pregunta correcta "Is Josué happy?"`,

  preguntas: [
    // 1 - pos 1
    {
      q: 'Choose the correct sentence in Present Simple:',
      opciones: [
        'Josué plays soccer every weekend.', // correcta
        'Josué is play soccer every weekend.',
        'Josué playing soccer every weekend.',
        'Josué played soccer every weekend.'
      ],
      correcta: 1
    },

    // 2 - pos 2
    {
      q: 'What does the adverb “usually” express?',
      opciones: [
        'Something that never happens',
        'Something that rarely happens',
        'Something that happens often', // correcta
        'Something that happens once a year'
      ],
      correcta: 2
    },

    // 3 - pos 0
    {
      q: 'Choose the correct future plan sentence:',
      opciones: [
        'Josué going to study tomorrow.',
        'Josué is study tomorrow.',
        'Josué is going to study tomorrow.', // correcta
        'Josué going study tomorrow.'
      ],
      correcta: 0
    },

    // 4 - pos 1
    {
      q: 'Which question is correct?',
      opciones: [
        'You like pizza?',
        'Does Josué likes pizza?',
        'Josué does like pizza?',
        'Does Josué like pizza?' // correcta
      ],
      correcta: 1
    },

    // 5 - pos 2
    {
      q: 'Choose the sentence with the adverb placed correctly:',
      opciones: [
        'Josué always is late.',
        'Always Josué is late.',
        'Josué is always late.', // correcta
        'Josué late always is.'
      ],
      correcta: 2
    },

    // 6 - pos 1
    {
      q: 'Which sentence is in Present Continuous?',
      opciones: [
        'Josué studies every day.',
        'Josué is studying right now.', // correcta
        'Josué study right now.',
        'Josué studying every day.'
      ],
      correcta: 1
    },

    // 7 - pos 3
    {
      q: 'What auxiliary is used for Present Simple questions?',
      opciones: [
        'Am',
        'Is',
        'Are',
        'Do / Does' // correcta
      ],
      correcta: 3
    },

    // 8 - pos 0
    {
      q: 'Select the correct sentence about future arrangements:',
      opciones: [
        'Josué is meeting his friend tomorrow.', // correcta
        'Josué meet his friend tomorrow.',
        'Josué is meet his friend tomorrow.',
        'Josué meeting his friend tomorrow.'
      ],
      correcta: 0
    },

    // 9 - pos 2
    {
      q: 'What does Present Continuous express when talking about the future?',
      opciones: [
        'A permanent habit',
        'An old routine',
        'A planned arrangement', // correcta
        'A completed action'
      ],
      correcta: 2
    },

    // 10 - pos 3
    {
      q: 'Choose the correct question form:',
      opciones: [
        'Does be Josué happy?',
        'Is does Josué happy?',
        'Josué is happy?',
        'Is Josué happy?' // correcta
      ],
      correcta: 3
    }
  ]
}

  ]
},

 4: {
  nombre: 'Cuarto Cuatrimestre',
  materias: [
    { id: 'Ética profesional',
  guia: `La ética profesional es un conjunto de principios y reglas que rigen la conducta en un entorno laboral. Su propósito principal es tomar decisiones responsables y promover la honestidad y conducta adecuada en el ejercicio de una profesión. Actuar éticamente implica siempre tomar decisiones justas.

Valores Centrales y Conducta
Un valor fundamental en la ética profesional es la responsabilidad, entendida como la obligación de responder por los propios actos y decisiones. La integridad profesional se relaciona directamente con este valor, requiriendo actuar con coherencia y rectitud en todo momento.

Un comportamiento ético contribuye directamente a construir confianza tanto con compañeros, como con clientes y la organización en general. Por el contrario, un ejemplo claro de falta de ética profesional es manipular información para beneficio propio.

Reglas Clave en el Entorno Laboral
Existen prácticas esenciales para garantizar un entorno ético:

La confidencialidad significa proteger información sensible de la empresa o de los clientes, prohibiendo su divulgación sin el permiso adecuado.

Un profesional ético NO debe aceptar sobornos, ya que esto compromete su juicio e integridad.

La ética profesional es fundamental para garantizar un entorno laboral sano, justo y respetuoso para todos los involucrados.`,
  
  preguntas: [
    { // 1 → correcta posición 1
      q: 'La ética profesional ayuda principalmente a:',
      opciones: ['Tomar decisiones responsables', 'Obedecer sin pensar', 'Ignorar consecuencias', 'Favorecer siempre al jefe'],
      correcta: 1
    },
    { // 2 → correcta posición 2
      q: 'Un ejemplo de falta de ética profesional es:',
      opciones: ['Pedir disculpas al cometer un error', 'Manipular información para beneficio propio', 'Cumplir horarios', 'Respetar normas del trabajo'],
      correcta: 1
    },
    { // 3 → correcta posición 0
      q: 'La ética profesional promueve:',
      opciones: ['Honestidad y conducta adecuada', 'Competir injustamente', 'Ocultar errores', 'Buscar solo beneficios personales'],
      correcta: 0
    },
    { // 4 → correcta posición 1
      q: 'Un valor fundamental en la ética profesional es:',
      opciones: ['Responsabilidad', 'Desinterés total', 'Desorganización', 'Irrespeto'],
      correcta: 0
    },
    { // 5 → correcta posición 2
      q: 'Actuar éticamente implica:',
      opciones: ['Engañar clientes', 'Tomar decisiones justas', 'Evitar comunicación', 'No respetar procesos'],
      correcta: 1
    },
    { // 6 → correcta posición 1
      q: 'La confidencialidad significa:',
      opciones: ['Proteger información sensible', 'Compartir datos sin permiso', 'Filtrar documentos', 'Hablar de asuntos privados en público'],
      correcta: 0
    },
    { // 7 → correcta posición 3
      q: 'Un profesional ético NO debe:',
      opciones: ['Cumplir sus obligaciones', 'Trabajar con transparencia', 'Respetar normas', 'Aceptar sobornos'],
      correcta: 3
    },
    { // 8 → correcta posición 1
      q: 'La integridad profesional se relaciona con:',
      opciones: ['Actuar con coherencia y rectitud', 'Mentir cuando conviene', 'Evitar reglas', 'Prometer sin cumplir'],
      correcta: 0
    },
    { // 9 → correcta posición 1
      q: 'Un comportamiento ético contribuye a:',
      opciones: ['Construir confianza', 'Generar conflictos', 'Ocultar problemas', 'Romper acuerdos'],
      correcta: 0
    },
    { // 10 → correcta posición 3
      q: 'La ética profesional es fundamental para:',
      opciones: ['Tratar mal a los compañeros', 'Ignorar responsabilidades', 'Ser deshonesto', 'Garantizar un entorno laboral sano'],
      correcta: 3
    }
  ]
},

    { id: 'Calculo de varias variables',
  guia: `El cálculo multivariable extiende los conceptos de una sola variable para describir relaciones en el espacio tridimensional y más allá.Funciones y Representación en el EspacioUna función de dos variables se expresa típicamente como $f(x, y)$, donde el valor de salida ($z$) depende de las dos variables de entrada, $x$ e $y$. La gráfica 3D de esta función representa la relación entre $x$, $y$ y $f(x, y)$, formando una superficie en el espacio. Una superficie puede representarse como una ecuación de tres variables ($z = f(x, y)$).El dominio de una función de dos variables es el conjunto de pares ordenados $(x, y)$ válidos en el plano $xy$ para los cuales la función está definida. El rango de la función corresponde a los valores que toma $f(x, y)$ (los posibles valores de $z$).Límites y ContinuidadEn funciones multivariables, el concepto de continuidad es estricto: un punto es continuo en una función cuando el límite coincide con el valor de la función en ese punto.Cuando se evalúa un límite en varias variables, este límite existe si el valor se acerca igual por cualquier camino o trayectoria que se tome hacia el punto en cuestión.Curvas de Nivel y SuperficiesPara simplificar la visualización de una función tridimensional en un plano bidimensional, se utilizan las curvas y superficies de nivel:Una curva de nivel en una función de dos variables es el conjunto de puntos donde $f(x, y) = k$, siendo $k$ una constante. Estas curvas son análogas a las curvas de altitud en un mapa topográfico.Una superficie de nivel es la extensión de este concepto a funciones de tres variables, describiendo un conjunto donde $f(x, y, z) = c$, siendo $c$ una constante.La gráfica 3D de una función de dos variables puede representarse visualmente con superficies en el espacio.`,

  preguntas: [
    { // 1 → correcta posición 2
      q: 'Una función de dos variables se expresa típicamente como:',
      opciones: ['f(x, y)', 'f(x)', 'f(t)', 'f(a, b, c)'],
      correcta: 0
    },
    { // 2 → correcta posición 0
      q: 'Una gráfica 3D representa:',
      opciones: ['La relación entre x, y y f(x, y)', 'Solo valores de x', 'Solo valores de y', 'Una recta en el plano'],
      correcta: 0
    },
    { // 3 → correcta posición 2
      q: 'Un punto es continuo en una función multivariable cuando:',
      opciones: ['El límite coincide con el valor de la función', 'El valor siempre es 0', 'Depende del color de la gráfica', 'No tiene límite'],
      correcta: 0
    },
    { // 4 → correcta posición 1
      q: 'Una superficie de nivel describe:',
      opciones: ['Un conjunto donde f(x,y)=c', 'Un punto aislado', 'Una sola coordenada', 'Un área sin valores definidos'],
      correcta: 0
    },
    { // 5 → correcta posición 2
      q: 'El dominio de una función de dos variables es:',
      opciones: ['El conjunto de pares (x,y) válidos', 'Solo los valores positivos', 'Un solo número', 'Cualquier valor sin restricción'],
      correcta: 0
    },
    { // 6 → correcta posición 3
      q: 'El rango de una función multivariable corresponde a:',
      opciones: ['Los posibles valores de x', 'Los pares ordenados del plano', 'Los números imaginarios', 'Los valores que toma f(x,y)'],
      correcta: 3
    },
    { // 7 → correcta posición 0
      q: 'Una curva de nivel en una función de dos variables es:',
      opciones: ['El conjunto de puntos donde f(x,y)=k', 'Un vector en 4D', 'Una recta horizontal siempre', 'El límite en 0'],
      correcta: 0
    },
    { // 8 → correcta posición 1
      q: 'Una gráfica 3D puede representarse con:',
      opciones: ['Superficies en el espacio', 'Solo puntos sueltos', 'Solo líneas rectas', 'Planos paralelos'],
      correcta: 1
    },
    { // 9 → correcta posición 2
      q: 'En varias variables, un límite existe si:',
      opciones: ['El valor se acerca igual por cualquier camino', 'Depende de un solo punto', 'No se puede calcular', 'Siempre es infinito'],
      correcta: 0
    },
    { // 10 → correcta posición 1
      q: 'Una superficie puede representarse como:',
      opciones: ['Un punto sin dimensión', 'Una ecuación de tres variables', 'Una recta en el plano', 'Un número decimal'],
      correcta: 1
    }
  ]
},
    { id: 'Aplicaciones web',
  guia: `Una aplicación web es un programa que se ejecuta principalmente en el navegador del usuario, lo que la diferencia del software de escritorio tradicional. La comunicación para que esto suceda sigue una arquitectura cliente-servidor, donde el cliente es el navegador del usuario que solicita información, y el servidor web es el encargado de entregar páginas y recursos al cliente.

El Trío de Tecnologías Frontend
El desarrollo del lado del cliente, o frontend, se refiere a la parte visual que ve el usuario y se construye con tres tecnologías fundamentales:

HTML (HyperText Markup Language) se utiliza principalmente para estructurar contenido, actuando como el esqueleto de la página.

CSS (Cascading Style Sheets) sirve para estilizar y dar formato visual al contenido, controlando la apariencia, colores y diseño.

JavaScript permite agregar interacción dinámica y funcionalidad que se ejecuta en el navegador del usuario.

Para construir interfaces grandes y complejas de manera más eficiente, se utilizan frameworks como React o Angular, cuya función es crear interfaces más eficientes al proporcionar estructuras de código reutilizables y patrones de diseño.

Backend y Comunicación
El backend se refiere a la lógica que se ejecuta en el servidor y se encarga de la lógica y manejo de datos, incluyendo la interacción con bases de datos y la seguridad.

Para que los diferentes sistemas, tanto el frontend como servicios externos, puedan intercambiar información, se utiliza una API (Application Programming Interface). En las aplicaciones web, una API sirve para comunicar sistemas y servicios de manera estandarizada y segura.`,

  preguntas: [
    { // 1 → correcta posición 1
      q: 'Una aplicación web se ejecuta principalmente en:',
      opciones: ['El navegador', 'Un dispositivo externo', 'Un servicio de correo', 'Un archivo físico sin conexión'],
      correcta: 1
    },
    { // 2 → correcta posición 3
      q: 'En la arquitectura cliente-servidor, el cliente es:',
      opciones: ['La base de datos', 'El sistema operativo', 'El servidor remoto', 'El navegador del usuario'],
      correcta: 3
    },
    { // 3 → correcta posición 2
      q: 'HTML se utiliza principalmente para:',
      opciones: ['Diseñar bases de datos', 'Efectos visuales avanzados', 'Estructurar contenido', 'Compilar código'],
      correcta: 2
    },
    { // 4 → correcta posición 0
      q: 'CSS sirve para:',
      opciones: ['Estilizar y dar formato visual', 'Procesar formularios', 'Gestionar sesiones', 'Realizar consultas SQL'],
      correcta: 0
    },
    { // 5 → correcta posición 2
      q: 'JavaScript permite:',
      opciones: ['Dar color a una página', 'Crear solo estilos', 'Agregar interacción dinámica', 'Modificar hardware'],
      correcta: 2
    },
    { // 6 → correcta posición 3
      q: 'Una API en aplicaciones web sirve para:',
      opciones: ['Modificar archivos locales', 'Controlar dispositivos físicos', 'Dar color al sitio', 'Comunicar sistemas y servicios'],
      correcta: 3
    },
    { // 7 → correcta posición 3
      q: 'El backend se encarga de:',
      opciones: ['Diseño visual', 'Animaciones CSS', 'Ventanas emergentes', 'Lógica y manejo de datos'],
      correcta: 3
    },
    { // 8 → correcta posición 1
      q: 'Frontend se refiere a:',
      opciones: ['Código del servidor', 'La parte visual que ve el usuario', 'Sistemas operativos', 'Bases de datos internas'],
      correcta: 1
    },
    { // 9 → correcta posición 2
      q: 'Un framework como React o Angular sirve para:',
      opciones: ['Editar imágenes', 'Hacer redes sociales', 'Crear interfaces más eficientes', 'Controlar dispositivos IoT'],
      correcta: 2
    },
    { // 10 → correcta posición 0
      q: 'Un servidor web es responsable de:',
      opciones: ['Entregar páginas y recursos al cliente', 'Modificar códigos de barra', 'Imprimir documentos', 'Crear hojas de cálculo'],
      correcta: 0
    }
  ]
},
    { id: 'Estructura de datos',
  guia: `Una estructura de datos es esencialmente una forma de organizar datos en la memoria de una computadora para que puedan ser gestionados de manera eficiente.

Estructuras Lineales
Una estructura de datos lineal es aquella donde los elementos se organizan uno detrás de otro, siguiendo una secuencia. Dos ejemplos clásicos son la pila y la cola:

La pila (stack) opera bajo el principio LIFO (Last In, First Out), lo que significa que el último elemento añadido es el primero en ser removido (como una pila de platos).

La cola (queue) opera bajo el principio FIFO (First In, First Out), donde el primer elemento añadido es el primero en ser atendido (como en una fila de espera).

Otra estructura lineal fundamental es la lista enlazada, la cual se caracteriza porque cada nodo apunta al siguiente a través de una referencia o puntero. Una ventaja clave de las listas enlazadas es que permiten inserciones y eliminaciones eficientes en comparación con los arreglos estáticos.

Estructuras No Lineales
Las estructuras no lineales no siguen una secuencia simple de un elemento tras otro:

Un árbol es una estructura no lineal típica que forma jerarquías. Específicamente, un árbol binario impone la restricción de que cada nodo tenga hasta 2 hijos (uno a la izquierda y uno a la derecha).

Un grafo es una estructura de red donde los vértices representan los nodos o puntos de la red, y las aristas representan las conexiones.

Finalmente, una tabla hash (o mapa hash) es una estructura altamente eficiente para el almacenamiento y recuperación, ya que utiliza una función hash para acceder a los datos directamente, sin tener que recorrer toda la estructura.`,

  preguntas: [
    { // 1 → correcta posición 0
      q: '¿Qué es una estructura de datos?',
      opciones: ['Una forma de organizar datos', 'Un sistema operativo', 'Un lenguaje de programación', 'Una red de computadoras'],
      correcta: 0
    },
    { // 2 → correcta posición 0
      q: 'Una estructura de datos lineal es aquella donde los elementos:',
      opciones: ['Se organizan uno detrás de otro', 'Forman jerarquías complejas', 'No tienen relación', 'Cambian de acuerdo a la RAM'],
      correcta: 0
    },
    { // 3 → correcta posición 1
      q: 'Una pila (stack) opera bajo el principio:',
      opciones: ['FIFO', 'Aleatorio', 'En paralelo', 'LIFO'],
      correcta: 1
    },
    { // 4 → correcta posición 1
      q: 'Una cola (queue) opera bajo el principio:',
      opciones: ['LIFO', 'Desordenado', 'FIFO', 'Binario'],
      correcta: 1
    },
    { // 5 → correcta posición 1
      q: 'Una lista enlazada se caracteriza porque:',
      opciones: ['Cada nodo apunta al siguiente', 'Solo tiene un nodo', 'Es siempre circular', 'No puede modificarse'],
      correcta: 1
    },
    { // 6 → correcta posición 2
      q: 'Un árbol binario permite que cada nodo tenga:',
      opciones: ['Cualquier número de hijos', 'Exactamente 3 hijos', 'Hasta 2 hijos', 'Solo 1 hijo'],
      correcta: 2
    },
    { // 7 → correcta posición 2
      q: 'Una estructura no lineal típica es:',
      opciones: ['Lista simple', 'Pila', 'Árbol', 'Cola'],
      correcta: 2
    },
    { // 8 → correcta posición 2
      q: 'En un grafo, los vértices representan:',
      opciones: ['Conexiones', 'Pesos', 'Nodos o puntos', 'Memoria RAM'],
      correcta: 2
    },
    { // 9 → correcta posición 2
      q: '¿Cuál es una ventaja de las listas enlazadas?',
      opciones: ['Acceso inmediato a cualquier elemento', 'Consumo cero de memoria', 'Inserciones y eliminaciones eficientes', 'Se ordenan automáticamente'],
      correcta: 2
    },
    { // 10 → correcta posición 3
      q: 'Una tabla hash utiliza:',
      opciones: ['Claves generadas por el usuario', 'Solo números enteros', 'Una gráfica especial', 'Una función hash para acceder a los datos'],
      correcta: 3
    }
  ]
},
   { id: 'Diseño de aplicaciones móviles',
  guia: `El diseño de aplicaciones móviles es el proceso de crear la interfaz y la experiencia que tendrá el usuario en las aplicaciones para dispositivos móviles. Este campo se divide en dos áreas principales:

UI y UX: Interfaz y Experiencia
UI (User Interface) se refiere a la Interfaz de Usuario, es decir, los elementos visuales con los que el usuario interactúa (botones, colores, tipografía).

UX (User Experience) se refiere principalmente a la Experiencia del Usuario, que abarca cómo se siente el usuario al interactuar con la aplicación, qué tan fácil y eficiente es su uso.

Principios del Diseño Móvil
Una característica fundamental del diseño móvil es la necesidad de optimizar para pantallas pequeñas, lo que obliga a los diseñadores a priorizar el contenido. La navegación intuitiva es clave y significa que las acciones son fáciles de comprender y usar sin necesidad de instrucciones complejas.

El patrón de navegación más común en las aplicaciones móviles es el desplazamiento vertical dentro de la pantalla, dado el formato natural de los smartphones.

El diseño responsivo es esencial y permite que una aplicación adapte su interfaz a distintos tamaños de pantalla, ya sea un teléfono pequeño o una tablet.

Herramientas de Visualización
Antes de comenzar la programación, el diseño pasa por varias etapas de visualización:

Un wireframe representa la estructura básica de la app, a menudo sin colores ni detalles, enfocándose solo en la disposición de los elementos.

Los mockups se utilizan para visualizar el diseño con colores, tipografía y estilo antes de la implementación final.

Un prototipo interactivo es el más avanzado, ya que permite simular el funcionamiento de la app antes del desarrollo del código, permitiendo probar flujos de usuario y recibir retroalimentación.`,

  preguntas: [
    { // 1 → correcta posición 0
      q: '¿Qué es el diseño de aplicaciones móviles?',
      opciones: [
        'Proceso de crear la interfaz y experiencia en apps móviles',
        'Un lenguaje de programación',
        'Un tipo de dispositivo',
        'Una red de comunicación'
      ],
      correcta: 0
    },
    { // 2 → correcta posición 1
      q: 'UI se refiere a:',
      opciones: [
        'Experiencia del usuario',
        'Interfaz de usuario',
        'Uso de internet',
        'Interacción física'
      ],
      correcta: 1
    },
    { // 3 → correcta posición 2
      q: 'UX se refiere principalmente a:',
      opciones: [
        'Interfaz visual',
        'Componentes del hardware',
        'Experiencia del usuario',
        'Número de pantallas'
      ],
      correcta: 2
    },
    { // 4 → correcta posición 0
      q: 'Una característica del diseño móvil es:',
      opciones: [
        'Optimizar para pantallas pequeñas',
        'Usar solo colores oscuros',
        'Evitar navegación clara',
        'Eliminar iconos'
      ],
      correcta: 0
    },
    { // 5 → correcta posición 1
      q: 'El patrón de navegación más común en apps móviles es:',
      opciones: [
        'Ventanas flotantes',
        'Desplazamiento vertical',
        'Menú lateral siempre oculto',
        'Mapas interactivos'
      ],
      correcta: 1
    },
    { // 6 → correcta posición 1
      q: 'El diseño responsivo permite que una app:',
      opciones: [
        'Funcione solo en tablets',
        'Adapte su interfaz a distintos tamaños de pantalla',
        'Consuma más batería',
        'Sea más pesada'
      ],
      correcta: 1
    },
    { // 7 → correcta posición 3
      q: 'Los mockups se utilizan para:',
      opciones: [
        'Programar directamente la app',
        'Generar bases de datos',
        'Probar algoritmos',
        'Visualizar el diseño antes de implementarlo'
      ],
      correcta: 3
    },
    { // 8 → correcta posición 0
      q: 'Un wireframe representa:',
      opciones: [
        'La estructura básica de la app',
        'La versión final con colores',
        'El código fuente completo',
        'Los errores encontrados'
      ],
      correcta: 0
    },
    { // 9 → correcta posición 1
      q: 'El término "navegación intuitiva" significa:',
      opciones: [
        'Muchos botones pequeños',
        'Acciones fáciles de comprender y usar',
        'Menús ocultos sin indicaciones',
        'Animaciones obligatorias'
      ],
      correcta: 1
    },
    { // 10 → correcta posición 3
      q: 'Un prototipo interactivo permite:',
      opciones: [
        'Reducir memoria del dispositivo',
        'Ejecutar la app sin diseño',
        'Analizar el hardware',
        'Simular el funcionamiento de la app antes del desarrollo'
      ],
      correcta: 3
    }
  ]
},

   { id: 'Analisis y diseño de software',
  guia: `El ciclo de desarrollo de software comienza con el análisis de requisitos, el cual consiste en identificar qué necesita el usuario y cuáles son los objetivos del sistema. Un aspecto clave en esta etapa es definir el requisito funcional, que especifica cómo debe reaccionar el sistema ante ciertas acciones del usuario. Esta fase inicial utiliza el análisis estructurado, que se caracteriza por dividir el sistema en módulos y funciones para su estudio.

Modelado y Diseño
Una vez que se tienen los requisitos, el diseño de software se enfoca en planificar cómo funcionará y estará organizado el sistema. El diseño arquitectónico es una parte crucial de esto, ya que define la estructura general del sistema (la división en componentes y sus interacciones).

Para validar las ideas y la viabilidad, se utiliza un prototipo de software, que permite probar ideas antes del producto definitivo, permitiendo retroalimentación temprana.

Herramientas de Modelado UML
La Ingeniería de Software utiliza herramientas de modelado visual para representar la estructura y el comportamiento del sistema:

Un caso de uso se modela para describir cómo interactúa un usuario con el sistema, detallando las acciones y respuestas esperadas.

El diagrama de clases sirve para representar la estructura y relaciones entre clases en un sistema orientado a objetos.

El diagrama de secuencia muestra cómo interactúan los objetos a través del tiempo, ilustrando el orden de los mensajes intercambiados durante una operación.

El diagrama de actividades representa los flujos de trabajo o procesos que ocurren dentro del sistema o el negocio.

Estos diagramas son esenciales para documentar la arquitectura y el comportamiento antes de comenzar la codificación.`,

  preguntas: [
    { // 1 → correcta posición 1
      q: 'El análisis de requisitos consiste en:',
      opciones: [
        'Identificar qué necesita el usuario',
        'Escribir código directamente',
        'Instalar el software final',
        'Eliminar funciones del sistema'
      ],
      correcta: 0
    },
    { // 2 → correcta posición 0
      q: 'Un caso de uso describe:',
      opciones: [
        'El diseño gráfico de la app',
        'Cómo interactúa un usuario con el sistema',
        'La estructura de la base de datos',
        'El diseño del hardware'
      ],
      correcta: 1
    },
    { // 3 → correcta posición 1
      q: 'El diseño de software se enfoca en:',
      opciones: [
        'Planificar cómo funcionará y estará organizado el sistema',
        'Escribir todos los reportes del proyecto',
        'Medir la velocidad del CPU',
        'Cambiar el sistema operativo'
      ],
      correcta: 0
    },
    { // 4 → correcta posición 1
      q: 'El diagrama de clases sirve para:',
      opciones: [
        'Representar la estructura y relaciones entre clases',
        'Indicar la velocidad del sistema',
        'Crear animaciones',
        'Representar actividades físicas'
      ],
      correcta: 0
    },
    { // 5 → correcta posición 2
      q: 'Un requisito funcional especifica:',
      opciones: [
        'Cómo debe reaccionar el sistema ante ciertas acciones',
        'El color de la interfaz',
        'La marca del equipo donde correrá',
        'La preferencia del usuario por temas oscuros'
      ],
      correcta: 0
    },
    { // 6 → correcta posición 3
      q: 'Un diagrama de secuencia muestra:',
      opciones: [
        'Los colores del sistema',
        'Los costos del proyecto',
        'Los pasos del ciclo de vida',
        'Cómo interactúan los objetos a través del tiempo'
      ],
      correcta: 3
    },
    { // 7 → correcta posición 1
      q: 'El análisis estructurado se caracteriza por:',
      opciones: [
        'Dividir el sistema en módulos y funciones',
        'Reducir el código innecesario',
        'Eliminar documentación',
        'Cambiar el hardware del servidor'
      ],
      correcta: 0
    },
    { // 8 → correcta posición 3
      q: 'Un prototipo de software permite:',
      opciones: [
        'Compilar la versión final',
        'Eliminar requisitos',
        'Analizar rendimiento del CPU',
        'Probar ideas antes del producto definitivo'
      ],
      correcta: 3
    },
    { // 9 → correcta posición 1
      q: 'El diagrama de actividades representa:',
      opciones: [
        'Flujos de trabajo o procesos',
        'El diseño físico del sistema',
        'La arquitectura del CPU',
        'La red de computadoras'
      ],
      correcta: 0
    },
    { // 10 → correcta posición 3
      q: 'El diseño arquitectónico define:',
      opciones: [
        'La decoración del laboratorio',
        'Los colores de la app',
        'La forma final del código',
        'La estructura general del sistema'
      ],
      correcta: 3
    }
  ]
},

   { id: 'Inglés IV',
  guia: `Voz Pasiva y Reporte Indirecto
La voz pasiva se utiliza para enfocar la acción en el objeto que la recibe, restando importancia a quién la realiza. La forma correcta de la voz pasiva en pasado simple sigue la estructura: Objeto + was/were + participio pasado. Un ejemplo correcto es: "The report was written yesterday" (El informe fue escrito ayer).

El reported speech (estilo indirecto) se usa para reportar lo que alguien dijo en el pasado, lo que generalmente implica un cambio de tiempo verbal (un paso hacia atrás). Una oración correctamente en reported speech es: "He said that he was tired" (Él dijo que estaba cansado, siendo la frase original "I am tired").

Tiempos Compuestos y Estructuras de Hábito
El past perfect se utiliza para describir una acción que ocurrió antes de otra acción en el pasado. Su estructura requiere el auxiliar had más el participio pasado. Un ejemplo correcto es: "Rodrigo had already left when I arrived" (Rodrigo ya se había ido cuando llegué).

El future perfect se utiliza para hablar de una acción que estará terminada en un punto específico en el futuro. Su estructura es will have + participio pasado. Una oración que expresa correctamente una futura acción terminada es: "By tomorrow, Rodrigo will have finished the project" (Para mañana, Rodrigo habrá terminado el proyecto).

El future continuous describe una acción que estará en progreso en un momento específico del futuro. Su forma es will be + verbo en -ing. Un ejemplo correcto de futuro continuo es: "Rodrigo will be studying at 8 PM" (Rodrigo estará estudiando a las 8 PM).

Para hablar de un hábito o rutina del pasado que ya no se realiza, se utiliza la estructura "used to". La forma correcta siempre es seguida por el verbo en su forma base: "Rodrigo used to play soccer when he was a kid" (Rodrigo solía jugar fútbol cuando era niño).

Condicionales, Comparativos y Modales
Un condicional real (Primer Condicional) se usa para hablar de una situación real o posible en el futuro. La estructura más común combina el presente simple en la cláusula if y will en la cláusula principal: "If it rains, we will stay home" (Si llueve, nos quedaremos en casa).

Para expresar habilidad avanzada, posibilidad o especulación en el pasado con modales, se usa el modal perfecto (modal + have + participio pasado). Una frase que expresa correctamente una habilidad avanzada con modales es: "Rodrigo might have completed the task earlier" (Rodrigo podría haber completado la tarea antes).

Para los comparativos avanzados, que enfatizan la diferencia, se puede usar la estructura far more + adjetivo. Una oración que usa comparativos avanzados de forma correcta es: "This book is far more interesting than the other" (Este libro es mucho más interesante que el otro).

Finalmente, una cláusula relativa (relative clause) se usa para dar información adicional sobre un sustantivo, utilizando pronombres como who, which o that. La oración que utiliza correctamente una cláusula relativa es: "The man who lives next door is a teacher" (El hombre que vive al lado es un profesor).`,
  preguntas: [

    // POSICIÓN 0 (preguntas 1,4,7)
    {
      q: ' ¿Cuál es la forma correcta de la voz pasiva?',
      opciones: ['The report was written yesterday', 'Write the report now', 'He writes fast', 'Writing reports is easy'],
      correcta: 0
    },
    {
      q: ' ¿Cuál de las siguientes oraciones está en reported speech?',
      opciones: ['He said that he was tired', 'He is tired now', 'He says he is tired', 'He will be tired'],
      correcta: 0
    },
    {
      q: ' ¿Qué frase expresa correctamente una habilidad avanzada con modales?',
      opciones: ['Rodrigo might have completed the task earlier', 'Rodrigo completes tasks daily', 'Rodrigo is completing the task', 'Rodrigo completed the task yesterday'],
      correcta: 0
    },

    // POSICIÓN 1 (preguntas 2,5)
    {
      q: ' ¿Cuál oración usa correctamente un condicional real?',
      opciones: ['If it rains, we will stay home', 'It rained yesterday', 'We stay if it raining', 'If rain, stay home'],
      correcta: 1
    },
    {
      q: ' ¿Qué oración usa comparativos avanzados?',
      opciones: ['This book is far more interesting than the other', 'This book interesting', 'The book is interest', 'More book interesting'],
      correcta: 1
    },

    // POSICIÓN 2 (preguntas 3,8)
    {
      q: ' ¿Cuál oración expresa correctamente una futura acción terminada (future perfect)?',
      opciones: ['By tomorrow, Rodrigo will have finished the project', 'Rodrigo will finish tomorrow', 'Rodrigo finished it', 'Rodrigo is finishing it'],
      correcta: 2
    },
    {
      q: ' ¿Qué opción corresponde a una oración del tipo past perfect?',
      opciones: ['Rodrigo had already left when I arrived', 'Rodrigo leaves now', 'Rodrigo will leave later', 'Rodrigo is leaving'],
      correcta: 2
    },

    // POSICIÓN 3 (preguntas 6,9,10)
    {
      q: ' ¿Qué oración utiliza correctamente una cláusula relativa (relative clause)?',
      opciones: ['The man who lives next door is a teacher', 'The man lives teacher', 'The man is teacher next', 'Teacher is the man'],
      correcta: 3
    },
    {
      q: ' ¿Qué opción usa correctamente “used to”?',
      opciones: ['Rodrigo used to play soccer when he was a kid', 'Rodrigo uses play soccer', 'Rodrigo use to soccer', 'Rodrigo playing used'],
      correcta: 3
    },
    {
      q: ' ¿Cuál es un ejemplo correcto de futuro continuo?',
      opciones: ['Rodrigo will be studying at 8 PM', 'Rodrigo is study', 'Rodrigo studies tomorrow', 'Rodrigo will studied'],
      correcta: 3
    }

  ]
}

  ]
},

  5: {
  nombre: 'Quinto Cuatrimestre',
  materias: [
   { id: 'Liderazgo de equipos de alto desempeño',
  guia: `Naturaleza del Alto Desempeño
Un equipo de alto desempeño se define como un grupo que alcanza resultados superiores mediante coordinación y compromiso mutuo. Un indicador de este tipo de equipo es la obtención de resultados constantes y mejora continua. Para que esto suceda, es fundamental tener una visión compartida, lo que significa que todos entienden y buscan el mismo objetivo organizacional.

Liderazgo y Estilos
La figura del líder es crucial; una característica esencial en un líder de alto desempeño es la capacidad de inspirar y guiar al equipo, en lugar de simplemente imponer. Un estilo efectivo es el liderazgo situacional, que es un estilo que cambia según las necesidades del equipo y las circunstancias del entorno, adaptando su enfoque de guía o apoyo.

Factores Interpersonales Clave
Dentro de la dinámica del equipo, ciertos elementos son vitales:

La comunicación en un equipo de alto desempeño facilita el flujo de información y la coordinación de tareas.

La confianza es importante porque permite delegar y cooperar efectivamente entre los miembros.

Mantener la motivación del equipo requiere reconocer logros y brindar retroalimentación.

La retroalimentación constructiva es aquella que consiste en comentarios que ayudan a mejorar el desempeño, enfocándose en la solución y el desarrollo, en lugar de solo en la crítica.

Incluso los desacuerdos pueden ser positivos: un conflicto funcional es un desacuerdo que mejora las decisiones y los resultados del equipo al promover el debate de ideas.`,
  preguntas: [

    // POSICIÓN 0 → preguntas 1 y 6
    {
      q: '¿Qué es un equipo de alto desempeño?',
      opciones: [
        'Un grupo que alcanza resultados superiores mediante coordinación y compromiso',
        'Un equipo que trabaja sin comunicación',
        'Personas que compiten entre sí',
        'Un grupo sin objetivos definidos'
      ],
      correcta: 0
    },
    {
      q: ' ¿Qué característica es esencial en un líder de alto desempeño?',
      opciones: [
        'Capacidad de inspirar y guiar al equipo',
        'Ignorar las opiniones del grupo',
        'Evitar responsabilidades',
        'Imponer decisiones sin escuchar'
      ],
      correcta: 0
    },

    // POSICIÓN 1 → preguntas 2, 7, 9
    {
      q: ' ¿Qué es liderazgo situacional?',
      opciones: [
        'Un estilo que cambia según las necesidades del equipo',
        'Un liderazgo rígido sin variaciones',
        'Un estilo basado solo en autoridad',
        'Un método que evita decisiones'
      ],
      correcta: 1
    },
    {
      q: ' ¿Cuál es un factor clave para mantener la motivación del equipo?',
      opciones: [
        'Reconocer logros y brindar retroalimentación',
        'Ignorar el esfuerzo del equipo',
        'Generar presión innecesaria',
        'Evitar comunicación'
      ],
      correcta: 1
    },
    {
      q: ' ¿Qué significa tener una visión compartida?',
      opciones: [
        'Que todos entienden y buscan el mismo objetivo',
        'Que cada persona trabaja en objetivos distintos',
        'Que no hay metas específicas',
        'Que solo el líder conoce la visión'
      ],
      correcta: 1
    },

    // POSICIÓN 2 → pregunta 3
    {
      q: ' ¿Qué rol desempeña la comunicación en un equipo de alto desempeño?',
      opciones: [
        'Permite transmitir órdenes sin discusión',
        'Facilita el flujo de información y coordinación',
        'Evita que los miembros participen',
        'Genera barreras dentro del grupo'
      ],
      correcta: 2
    },

    // POSICIÓN 3 → preguntas 4, 5, 8, 10
    {
      q: '¿Qué es la retroalimentación constructiva?',
      opciones: [
        'Críticas sin fundamento',
        'Comentarios que ayudan a mejorar desempeño',
        'Ignorar errores para evitar conflictos',
        'Señalar fallas sin proponer soluciones'
      ],
      correcta: 3
    },
    {
      q: ' ¿Por qué es importante la confianza en un equipo?',
      opciones: [
        'Porque permite delegar y cooperar efectivamente',
        'Porque elimina la necesidad de comunicación',
        'Porque favorece la competencia interna',
        'Porque reduce la responsabilidad del líder'
      ],
      correcta: 3
    },
    {
      q: ' ¿Qué es un conflicto funcional?',
      opciones: [
        'Un conflicto que destruye al equipo',
        'Una discusión sin propósito',
        'Un desacuerdo que mejora decisiones y resultados',
        'Una pelea personal entre miembros'
      ],
      correcta: 3
    },
    {
      q: ' ¿Cuál es un indicador de un equipo de alto desempeño?',
      opciones: [
        'Resultados constantes y mejora continua',
        'Alta rotación de miembros',
        'Falta de compromiso',
        'Metas confusas'
      ],
      correcta: 3
    }

  ]
},

    { id: 'Ecuaciones Diferenciales',
  guia: `Una ecuación diferencial se define como una ecuación que relaciona una función con sus derivadas. Estas ecuaciones son fundamentales para modelar fenómenos dinámicos en ingeniería y física.

Clasificación y Propiedades Fundamentales
Las ecuaciones diferenciales se clasifican por su orden, grado y linealidad:

Orden: El orden de una ecuación diferencial lo indica la derivada de mayor grado presente en la ecuación.

Grado: El grado de una ecuación diferencial se define como el exponente de la derivada de mayor orden después de simplificar la ecuación (por ejemplo, eliminando raíces).

Linealidad: Una ecuación diferencial es lineal cuando la función y sus derivadas aparecen con potencia uno y no están multiplicadas entre sí.

Una ecuación diferencial homogénea se caracteriza porque todos los términos dependen del mismo grado de la variable dependiente y sus derivadas.

Soluciones y Métodos
Una solución general de una ecuación diferencial representa una familia de soluciones con constante arbitraria (generalmente la constante de integración). Cuando se aplican condiciones iniciales, se obtiene una solución particular, que es una solución específica sin constantes.

Existen varios métodos para resolver distintos tipos de ecuaciones diferenciales:

Ecuaciones Separables: Se resuelven mediante el método de separación de variables, donde se manipula la ecuación para agrupar las variables dependientes e independientes en lados opuestos para luego integrar.

Ecuaciones Lineales de Primer Orden: Este tipo de ecuación se resuelve mediante el factor integrante, un término especial que permite transformar la ecuación para hacerla fácilmente integrable.

Física y Aplicaciones: Una herramienta matemática que se utiliza frecuentemente para resolver ecuaciones diferenciales aplicadas en física e ingeniería (particularmente aquellas con condiciones iniciales) es la transformada de Laplace.`,
  preguntas: [

    // POSICIÓN 0 → 1, 3, 5, 7, 9
    {
      q: ' ¿Qué es una ecuación diferencial?',
      opciones: [
        'Una ecuación que relaciona una función con sus derivadas',
        'Una ecuación con solo números enteros',
        'Una ecuación sin variables',
        'Una ecuación que solo usa límites'
      ],
      correcta: 0
    },
    {
      q: ' ¿Qué indica el orden de una ecuación diferencial?',
      opciones: [
        'La derivada de mayor grado presente en la ecuación',
        'El número de ecuaciones simultáneas',
        'El número de soluciones posibles',
        'La cantidad de constantes en la ecuación'
      ],
      correcta: 0
    },
    {
      q: ' Una ecuación diferencial es lineal cuando:',
      opciones: [
        'La función y sus derivadas aparecen con potencia uno',
        'La ecuación tiene exponentes mayores a dos',
        'La función depende solo de una variable',
        'La ecuación no tiene derivadas'
      ],
      correcta: 0
    },
    {
      q: ' ¿Qué método se usa para resolver ecuaciones diferenciales separables?',
      opciones: [
        'Separación de variables',
        'Eliminación por renglones',
        'Método de Gauss',
        'Regla de L’Hôpital'
      ],
      correcta: 0
    },
    {
      q: ' ¿Qué es una solución general de una ecuación diferencial?',
      opciones: [
        'Una familia de soluciones con constante arbitraria',
        'Una sola solución numérica',
        'Una solución aproximada',
        'Una solución sin constantes'
      ],
      correcta: 0
    },

    // POSICIÓN 1 → 2
    {
      q: ' ¿Qué es el grado de una ecuación diferencial?',
      opciones: [
        'El exponente de la derivada de mayor orden después de eliminar raíces',
        'El número total de términos',
        'El número de derivadas presentes',
        'El nivel de dificultad del problema'
      ],
      correcta: 1
    },

    // POSICIÓN 2 → 4, 6, 8
    {
      q: ' Una ecuación diferencial homogénea se caracteriza por:',
      opciones: [
        'Tener coeficientes constantes',
        'Que todos los términos dependan del mismo grado',
        'Que no tenga derivadas',
        'Que solo tenga una variable independiente'
      ],
      correcta: 2
    },
    {
      q: ' ¿Qué tipo de ecuación diferencial se resuelve con el factor integrante?',
      opciones: [
        'Ecuaciones diferenciales exactas',
        'Ecuaciones lineales de primer orden',
        'Ecuaciones sin solución',
        'Ecuaciones algebraicas'
      ],
      correcta: 2
    },
    {
      q: ' ¿Una solución particular qué representa?',
      opciones: [
        'Una solución que contiene constantes arbitrarias',
        'Una solución que no depende del tiempo',
        'Una solución específica sin constantes',
        'Una solución que siempre es cero'
      ],
      correcta: 2
    },

    // POSICIÓN 3 → 10
    {
      q: ' ¿Qué herramienta se utiliza frecuentemente para resolver ecuaciones diferenciales aplicadas en física?',
      opciones: [
        'El método de separación de coeficientes',
        'La transformada de Laplace',
        'La regla del producto',
        'La factorización cuadrática'
      ],
      correcta: 3
    }

  ]
},
    { id: 'Aplicaciones Web Orientadas a Servicios',
  guia: `Un servicio web se define como un sistema que permite la comunicación entre aplicaciones a través de internet de forma estandarizada. La filosofía detrás de la creación de estos sistemas se conoce como SOA (Service Oriented Architecture), que promueve la construcción de sistemas a partir de servicios reutilizables e interoperables.

Protocolos, Métodos y Formatos
Los servicios web utilizan protocolos y estructuras definidas para el intercambio de información:

Métodos HTTP: Los servicios basados en REST (Representational State Transfer) son un tipo de servicio web que permite la comunicación basada en recursos con métodos HTTP estándar. Los métodos clave son:

GET: Se usa para solicitar datos sin modificarlos en el servidor.

POST: Se utiliza para enviar datos a un servidor para crear recursos nuevos.

Formatos de Datos: El formato más común para enviar y recibir datos en APIs REST es JSON (JavaScript Object Notation), debido a su ligereza y facilidad de lectura. En contraste, el protocolo SOAP (Simple Object Access Protocol) se caracteriza por basarse en XML (eXtensible Markup Language) y seguir reglas más estrictas. XML es un lenguaje de marcado para estructurar datos.

Comunicación y Herramientas
Cuando un cliente envía una petición a un servicio web, si la operación es exitosa, el servicio devuelve un código de estado 200 OK, indicando que la solicitud fue procesada correctamente.

Para que los desarrolladores puedan interactuar y probar las funcionalidades de una API (que es la interfaz que permite acceder al servicio web), una herramienta comúnmente utilizada es Postman, que facilita la construcción y envío de solicitudes HTTP.
`,
  preguntas: [
    {
      q: '¿Qué es un servicio web?',
      opciones: [
        'Un sistema que permite la comunicación entre aplicaciones a través de internet',
        'Una página web estática',
        'Un archivo ejecutable para escritorio',
        'Un software que solo funciona sin conexión'
      ],
      correcta: 0
    },
    {
      q: '¿Qué significa SOA?',
      opciones: [
        'System Operative Application',
        'Service Oriented Architecture',
        'Software Over API',
        'Sistema Orientado a Aplicaciones'
      ],
      correcta: 1
    },
    {
      q: '¿Qué método HTTP se utiliza para enviar datos a un servidor para crear recursos?',
      opciones: [
        'GET',
        'POST',
        'DELETE',
        'HEAD'
      ],
      correcta: 2
    },
    {
      q: '¿Qué método HTTP se usa para solicitar datos sin modificarlos?',
      opciones: [
        'POST',
        'PUT',
        'PATCH',
        'GET'
      ],
      correcta: 3
    },
    {
      q: '¿Qué es XML?',
      opciones: [
        'Un formato de audio comprimido',
        'Un lenguaje de marcado para estructurar datos',
        'Un protocolo de red',
        'Un lenguaje de programación'
      ],
      correcta: 2
    },
    {
      q: 'SOAP se caracteriza por:',
      opciones: [
        'Ser ligero y flexible',
        'Usar principalmente JSON',
        'Basarse en XML y reglas estrictas',
        'Ser exclusivo para redes privadas'
      ],
      correcta: 3
    },
    {
      q: '¿Qué tipo de servicio permite la comunicación basada en recursos con métodos HTTP?',
      opciones: [
        'SOAP',
        'REST',
        'FTP',
        'SSH'
      ],
      correcta: 1
    },
    {
      q: '¿Qué herramienta se usa comúnmente para probar APIs?',
      opciones: [
        'Excel',
        'PowerPoint',
        'Postman',
        'Illustrator'
      ],
      correcta: 2
    },
    {
      q: '¿Qué formato es común para enviar y recibir datos en APIs REST?',
      opciones: [
        'JSON',
        'TXT',
        'DOCX',
        'MP3'
      ],
      correcta: 0
    },
    {
      q: '¿Qué devuelve un servicio web cuando la petición es exitosa?',
      opciones: [
        'Una imagen PNG',
        'Un error 500',
        'Un código de estado 200 OK',
        'Un archivo ZIP vacío'
      ],
      correcta: 2
    }
  ]
},
    { id: 'Bases de Datos Avanzadas',
  guia: `Transacciones y Concurrencia
Una transacción en una base de datos es una unidad lógica de trabajo que debe cumplirse por completo (o no ejecutarse en absoluto) para mantener la integridad de la información. La consistencia de estas transacciones se rige por las propiedades ACID.

Una de estas propiedades, el aislamiento, garantiza que una transacción se ejecute como si fuera la única en el sistema, incluso si hay múltiples usuarios interactuando simultáneamente. Para gestionar estas interacciones, la técnica utilizada para evitar conflictos en transacciones simultáneas es el control de concurrencia. Un ejemplo de este mecanismo es el bloqueo de escritura (Write Lock), que impide que otros usuarios modifiquen un dato mientras está siendo utilizado por una transacción.

Optimización y Rendimiento
El rendimiento de la base de datos se mejora a través de varias estructuras y estrategias:

Un índice es una estructura que acelera las búsquedas y la recuperación de datos en las tablas, similar al índice de un libro.

Una vista materializada es diferente a una vista estándar, ya que es una vista cuyo resultado se almacena físicamente en el disco. Esto acelera las consultas complejas a costa de consumir más espacio de almacenamiento.

La escalabilidad horizontal es una estrategia de crecimiento de rendimiento que implica agregar más servidores al sistema (como sharding o clústeres) para distribuir la carga de trabajo.

La replicación de bases de datos (mantener copias idénticas en diferentes servidores) tiene la ventaja de mejorar la disponibilidad y la tolerancia a fallos, ya que si un servidor cae, los datos siguen siendo accesibles en otro.

Lógica Almacenada y Automatización
Para encapsular la lógica de negocio y mejorar la seguridad, se utilizan herramientas programables en el servidor:

Un procedimiento almacenado tiene como función principal almacenar lógica en el servidor (una serie de comandos SQL) que puede ser invocada por la aplicación cliente.

Un trigger es una herramienta de automatización que sirve para ejecutar acciones automáticas ante eventos específicos (como una inserción, actualización o eliminación) en una tabla.`,
  preguntas: [

    // Pregunta 1 → posición correcta = 0
    {
      q: '¿Qué es una transacción en una base de datos?',
      opciones: [
        'Una unidad lógica de trabajo que debe cumplirse por completo',
        'Una consulta simple',
        'Un archivo externo del sistema',
        'Un respaldo automático'
      ],
      correcta: 0
    },

    // Pregunta 2 → posición correcta = 1
    {
      q: '¿Qué propiedad ACID garantiza que una transacción se ejecute como si fuera la única?',
      opciones: [
        'Durabilidad',
        'Aislamiento',
        'Atomicidad',
        'Consistencia'
      ],
      correcta: 1
    },

    // Pregunta 3 → posición correcta = 1
    {
      q: '¿Qué es un índice en una base de datos?',
      opciones: [
        'Una copia completa de una tabla',
        'Una estructura que acelera las búsquedas',
        'Un trigger temporal',
        'Un archivo de respaldo'
      ],
      correcta: 1
    },

    // Pregunta 4 → posición correcta = 2
    {
      q: '¿Qué es una vista materializada?',
      opciones: [
        'Una tabla eliminada',
        'Una función almacenada',
        'Una vista cuyo resultado se almacena físicamente',
        'Un índice corrupto'
      ],
      correcta: 2
    },

    // Pregunta 5 → posición correcta = 2
    {
      q: '¿Para qué sirve un trigger?',
      opciones: [
        'Respaldar bases de datos automáticamente',
        'Eliminar registros duplicados',
        'Ejecutar acciones automáticas ante eventos',
        'Crear índices globales'
      ],
      correcta: 2
    },

    // Pregunta 6 → posición correcta = 2
    {
      q: '¿Cuál es la función principal de un procedimiento almacenado?',
      opciones: [
        'Crear usuarios nuevos',
        'Ejecutar código SQL dentro de la aplicación',
        'Almacenar lógica en el servidor',
        'Eliminar tablas'
      ],
      correcta: 2
    },

    // Pregunta 7 → posición correcta = 3
    {
      q: '¿Qué técnica se utiliza para evitar conflictos en transacciones simultáneas?',
      opciones: [
        'Compresión de datos',
        'Normalización extrema',
        'Desfragmentación',
        'Control de concurrencia'
      ],
      correcta: 3
    },

    // Pregunta 8 → posición correcta = 3
    {
      q: '¿Cuál es un ejemplo de bloqueo en bases de datos?',
      opciones: [
        'Compilar una vista',
        'Actualizar una función',
        'Reiniciar un servidor',
        'Bloqueo de escritura (Write Lock)'
      ],
      correcta: 3
    },

    // Pregunta 9 → posición correcta = 3
    {
      q: '¿Qué significa escalabilidad horizontal?',
      opciones: [
        'Mejorar un solo servidor',
        'Uso exclusivo de índices',
        'Reducir el tamaño de la BD',
        'Agregar más servidores al sistema'
      ],
      correcta: 3
    },

    // Pregunta 10 → posición correcta = 3
    {
      q: '¿Qué ventaja tiene la replicación de bases de datos?',
      opciones: [
        'Reduce la memoria RAM necesaria',
        'Impide conexiones externas',
        'Hace imposible la pérdida de datos',
        'Mejora disponibilidad y tolerancia a fallos'
      ],
      correcta: 3
    }
  ]
},
   {  id: 'Estandares y Metricas para el Diseño de Software',
  guia: `Un estándar de software se define como una regla o guía aceptada para desarrollar software y procesos asociados. El objetivo principal de los estándares de calidad es incrementar la coherencia y confiabilidad del software, lo que resulta en una mayor calidad, orden y consistencia en el producto final.

Métricas y Modelos de Calidad
Para evaluar objetivamente la calidad, se utilizan métricas de software, que son indicadores utilizados para medir características del software. Estas métricas se dividen generalmente en dos tipos:

Métrica de Proceso: Mide aspectos del desarrollo como esfuerzo, tiempo y productividad del equipo o del proyecto.

Métrica de Producto: Mide características del software ya terminado, como su complejidad o tamaño.

Un ejemplo específico de métrica de producto es la complejidad ciclomatica, que mide el número de caminos independientes en el código, siendo un indicador directo de qué tan difícil será probar y mantener ese código.

Un atributo de calidad evaluado por estas métricas es la mantenibilidad, que se refiere a la facilidad con que un software puede modificarse, corregirse o mejorarse.

Estándares y Modelos de Mejora
Para gestionar la calidad a nivel de producto y proceso, se utilizan modelos y normas internacionales:

El modelo CMMI (Capability Maturity Model Integration) se utiliza para evaluar y mejorar procesos de desarrollo dentro de una organización, guiando a las empresas hacia niveles superiores de madurez.

La norma ISO/IEC 25010 es un estándar clave que define un modelo de calidad del producto de software, detallando los atributos que deben ser medidos (como la usabilidad, la mantenibilidad y la funcionalidad).

La principal ventaja de aplicar estándares en el desarrollo es la obtención de mayor calidad, orden y consistencia en el producto final, reduciendo los riesgos inherentes al desarrollo.`,
  preguntas: [

    // Pregunta 1 → posición correcta = 1
    {
      q: '¿Qué es un estándar de software?',
      opciones: [
        'Una regla o guía aceptada para desarrollar software',
        'Una herramienta de depuración',
        'Un lenguaje de programación nuevo',
        'Un archivo de configuración'
      ],
      correcta: 1
    },

    // Pregunta 2 → posición correcta = 0
    {
      q: '¿Cuál es el objetivo principal de los estándares de calidad?',
      opciones: [
        'Incrementar la coherencia y confiabilidad del software',
        'Reducir el tamaño del instalador',
        'Hacer el sistema más vistoso',
        'Aumentar el consumo de recursos'
      ],
      correcta: 0
    },

    // Pregunta 3 → posición correcta = 2
    {
      q: '¿Qué son las métricas de software?',
      opciones: [
        'Funciones que crean interfaces gráficas',
        'Indicadores utilizados para medir características del software',
        'Errores detectados en una compilación',
        'Reglas para nombrar archivos'
      ],
      correcta: 2
    },

    // Pregunta 4 → posición correcta = 3
    {
      q: '¿Para qué sirve el modelo CMMI?',
      opciones: [
        'Reiniciar servidores automáticamente',
        'Medir el rendimiento de memoria',
        'Estimar el ancho de banda',
        'Evaluar y mejorar procesos de desarrollo'
      ],
      correcta: 3
    },

    // Pregunta 5 → posición correcta = 0
    {
      q: '¿Qué mide una métrica de proceso?',
      opciones: [
        'Aspectos del desarrollo como esfuerzo, tiempo y productividad',
        'El color de la interfaz',
        'El número de usuarios conectados',
        'La marca del equipo'
      ],
      correcta: 0
    },

    // Pregunta 6 → posición correcta = 0
    {
      q: '¿Qué caracteriza a la norma ISO/IEC 25010?',
      opciones: [
        'Define un modelo de calidad del producto de software',
        'Es un lenguaje de programación',
        'Es un tipo de base de datos',
        'Es una licencia de software libre'
      ],
      correcta: 0
    },

    // Pregunta 7 → posición correcta = 1
    {
      q: '¿Qué es la mantenibilidad en las métricas de calidad?',
      opciones: [
        'El hardware mínimo requerido',
        'La facilidad con que un software puede modificarse',
        'La cantidad de personas en el equipo',
        'El número de ventanas abiertas'
      ],
      correcta: 1
    },

    // Pregunta 8 → posición correcta = 0
    {
      q: '¿Qué es una métrica de producto?',
      opciones: [
        'Mide características del software como complejidad o tamaño',
        'Evalúa salarios del personal',
        'Analiza velocidad del internet',
        'Clasifica tipos de hardware'
      ],
      correcta: 0
    },

    // Pregunta 9 → posición correcta = 0
    {
      q: '¿Qué mide la métrica de complejidad ciclomatica?',
      opciones: [
        'El número de caminos independientes en el código',
        'La memoria usada por el programa',
        'El consumo energético',
        'La cantidad de archivos disponibles'
      ],
      correcta: 0
    },

    // Pregunta 10 → posición correcta = 0
    {
      q: '¿Cuál es una ventaja de aplicar estándares en el desarrollo?',
      opciones: [
        'Mayor calidad, orden y consistencia en el producto final',
        'Los programas se vuelven automáticamente más rápidos',
        'El sistema se vuelve inmune a errores',
        'Ya no se requieren pruebas'
      ],
      correcta: 0
    }

  ]
},
   { id: 'Proyecto Integrador II',
  guia: `El éxito de un proyecto integrador avanzado se basa en una planificación rigurosa y una ejecución organizada. El primer paso en la planificación es siempre definir los objetivos y el alcance del proyecto, estableciendo qué se logrará y cuáles son sus límites.

Planificación y Herramientas
Para la gestión de tareas y tiempos, el Diagrama de Gantt es la herramienta clave que ayuda a gestionar tareas y tiempos en el proyecto, proporcionando una visualización clara del cronograma. La función principal de la documentación técnica es registrar procedimientos y resultados de forma clara, asegurando la trazabilidad y la transferencia de conocimiento.

La evaluación final y la medición del éxito del proyecto se basan en el cumplimiento de objetivos y la entrega de resultados, así como en el cumplimiento de objetivos y resultados obtenidos.

Metodología y Ejecución
La calidad del proyecto integrador final se garantiza mediante la revisión completa y validación de entregables a lo largo de las fases del proyecto. La ventaja de usar metodologías ágiles en el proyecto, como Scrum, es que permiten adaptarse rápidamente a cambios y mejorar la coordinación del equipo.

Los conocimientos adquiridos en ciclos anteriores se vuelven esenciales, ya que se espera que el estudiante integre los conocimientos de cuatrimestres anteriores en el proyecto mediante la aplicación de técnicas y conceptos aprendidos previamente.

Trabajo en Equipo y Presentación
Para mejorar la eficiencia y la cohesión, la estrategia que mejora el trabajo en equipo durante el proyecto es establecer reuniones periódicas y roles claros para cada integrante.

Al llegar a la presentación final, el aspecto fundamental es la claridad en la exposición y evidencia de resultados, lo que demuestra de manera concisa el logro de los objetivos definidos en la planificación inicial.`,
  preguntas: [
    // Posición correcta = 0 → Pregunta 1
    {
      q: '¿Cuál es el primer paso en la planificación de un proyecto integrador avanzado?',
      opciones: [
        'Definir objetivos y alcance del proyecto',
        'Iniciar la ejecución sin planificación',
        'Contratar personal externo',
        'Ignorar requisitos del cliente'
      ],
      correcta: 0
    },

    // Posición correcta = 1 → Pregunta 2
    {
      q: '¿Qué herramienta ayuda a gestionar tareas y tiempos en el proyecto?',
      opciones: [
        'Diagrama de flujo manual',
        'Diagrama de Gantt',
        'Solo notas en papel',
        'Memorizar tareas'
      ],
      correcta: 1
    },

    // Posición correcta = 2 → Pregunta 3
    {
      q: '¿Cómo se integran los conocimientos de cuatrimestres anteriores en el proyecto?',
      opciones: [
        'Ignorando aprendizajes previos',
        'Solo copiando trabajos antiguos',
        'Aplicando técnicas y conceptos aprendidos',
        'Contratando consultores'
      ],
      correcta: 2
    },

    // Posición correcta = 3 → Pregunta 4
    {
      q: '¿Cuál es la función principal de la documentación técnica?',
      opciones: [
        'Hacer que el proyecto se vea bonito',
        'Almacenar archivos innecesarios',
        'Evitar trabajo en equipo',
        'Registrar procedimientos y resultados de forma clara'
      ],
      correcta: 3
    },

    // Posición correcta = 0 → Pregunta 5
    {
      q: '¿Qué elemento es clave para la evaluación final de un proyecto integrador?',
      opciones: [
        'Cumplimiento de objetivos y entrega de resultados',
        'Cantidad de diapositivas',
        'Color del informe',
        'Tiempo invertido en descansos'
      ],
      correcta: 0
    },

    // Posición correcta = 3 → Pregunta 6
    {
      q: '¿Qué estrategia mejora el trabajo en equipo durante el proyecto?',
      opciones: [
        'Ignorar la comunicación',
        'Trabajar de forma aislada',
        'Evitar reuniones',
        'Reuniones periódicas y roles claros'
      ],
      correcta: 3
    },

    // Posición correcta = 3 → Pregunta 7
    {
      q: '¿Cuál es la ventaja de usar metodologías ágiles en el proyecto?',
      opciones: [
        'Incrementar errores',
        'Disminuir comunicación',
        'Retrasar entregas',
        'Adaptarse rápidamente a cambios y mejorar coordinación'
      ],
      correcta: 3
    },

    // Posición correcta = 1 → Pregunta 8
    {
      q: '¿Qué aspecto es fundamental al presentar resultados del proyecto?',
      opciones: [
        'Ignorar al público',
        'Claridad en la exposición y evidencia de resultados',
        'Usar términos complicados',
        'Solo leer diapositivas'
      ],
      correcta: 1
    },

    // Posición correcta = 0 → Pregunta 9
    {
      q: '¿Qué garantiza la calidad del proyecto integrador final?',
      opciones: [
        'Revisión completa y validación de entregables',
        'Copiar de otros proyectos',
        'Entregar tarde sin revisión',
        'No realizar pruebas'
      ],
      correcta: 0
    },

    // Posición correcta = 2 → Pregunta 10
    {
      q: '¿Cómo se mide el éxito de un proyecto integrador?',
      opciones: [
        'Por la cantidad de diapositivas',
        'Por la duración de la presentación',
        'Por el cumplimiento de objetivos y resultados obtenidos',
        'Por el número de reuniones'
      ],
      correcta: 2
    }
  ]
},
   {
 id: 'Inglés V',
  guia: `Tiempos Perfectos
El presente perfecto (Present Perfect) se utiliza para describir acciones que sucedieron en un momento no especificado antes del presente (la acción es relevante ahora, aunque no sabemos exactamente cuándo ocurrió).

El presente perfecto continuo (Present Perfect Continuous) se utiliza para acciones que comenzaron en el pasado y continúan en el presente o acaban de finalizar. La estructura correcta requiere el verbo principal en gerundio (-ing), como en: "I have been learning English for five years" (He estado aprendiendo inglés durante cinco años).

El pasado perfecto (Past Perfect) se utiliza para una acción pasada que ocurrió antes de otra acción pasada. La traducción correcta de una frase en este tiempo es: "She had already left when I arrived" (Ella ya se había ido cuando yo llegué).

Condicionales y Estructuras Subjuntivas
La estructura condicional tipo 2 (Second Conditional) se usa para expresar situaciones hipotéticas o irreales en el presente o futuro. Utiliza el pasado simple en la cláusula if y would en la cláusula principal. Por lo tanto, la opción correcta es: "If I had more time, I would travel abroad."

Para expresar la necesidad de que algo se haga ahora, la estructura "It’s high time" es seguida por el verbo en pasado simple, como en: "It’s high time you did your homework" (Ya es hora de que hicieras tu tarea).

En oraciones que sugieren o exigen una acción (suggested, required), el verbo que sigue a la cláusula that debe ir en su forma base (subrayando el modo subjuntivo), incluso para la tercera persona. La forma correcta es: "He suggested that she submit the report immediately."

Comparativos, Verbos de Reporte y Expresiones
El comparativo "more" se utiliza correctamente para comparar dos elementos o cantidades, especialmente con adjetivos largos.

La diferencia entre los verbos "say" y "tell" es contextual: "Say" se enfoca en las palabras que se dijeron, mientras que "Tell" se enfoca en informar a alguien (generalmente requiere un objeto indirecto, tell someone).

Para expresar una opinión formal en un ensayo, se deben usar frases como "In my opinion" (En mi opinión), en lugar de frases informales.

Finalmente, una expresión idiomática como "break the ice" (romper el hielo) significa hacer que las personas se sientan cómodas en una situación social o formal.`,
  preguntas: [
    // Posición correcta = 0 → Pregunta 1
    {
      q: '¿Cuál es el uso correcto del presente perfecto en inglés?',
      opciones: [
        'Actions that happened at an unspecified time before now',
        'Actions that will happen in the future',
        'Actions completed at an exact time',
        'Habitual actions in the past'
      ],
      correcta: 0
    },

    // Posición correcta = 2 → Pregunta 2
    {
      q: '¿Qué palabra completa correctamente: "I have been ____ English for five years"?',
      opciones: [
        'learn',
        'learns',
        'learning',
        'learned'
      ],
      correcta: 2
    },

    // Posición correcta = 0 → Pregunta 3
    {
      q: '¿Cuál es la diferencia entre "say" y "tell"?',
      opciones: [
        '"Say" focuses on the words, "Tell" on informing someone',
        '"Tell" is only used in the past',
        '"Say" is only used in questions',
        'There is no difference, they are interchangeable'
      ],
      correcta: 0
    },

    // Posición correcta = 2 → Pregunta 4
    {
      q: 'Selecciona la opción correcta: "If I ____ more time, I would travel abroad."',
      opciones: [
        'have',
        'has',
        'had',
        'having'
      ],
      correcta: 2
    },

    // Posición correcta = 1 → Pregunta 5
    {
      q: '¿Cuál es la forma correcta de expresar una opinión formal en un ensayo?',
      opciones: [
        'I guess',
        'In my opinion',
        'I think maybe',
        'Me personally'
      ],
      correcta: 1
    },

    // Posición correcta = 3 → Pregunta 6
    {
      q: '¿Cuál es la traducción correcta de "She had already left when I arrived"?',
      opciones: [
        'She arrived before I left',
        'She arrived after I came',
        'She leaves tomorrow',
        'She had already left when I arrived'
      ],
      correcta: 3
    },

    // Posición correcta = 0 → Pregunta 7
    {
      q: '¿Qué significa la expresión idiomática "break the ice"?',
      opciones: [
        'Make people feel comfortable in a situation',
        'Break something physically',
        'Start a fight',
        'Take a break'
      ],
      correcta: 0
    },

    // Posición correcta = 2 → Pregunta 8
    {
      q: 'Selecciona la forma correcta: "He suggested that she ____ the report immediately."',
      opciones: [
        'submits',
        'submitted',
        'submit',
        'submitting'
      ],
      correcta: 2
    },

    // Posición correcta = 0 → Pregunta 9
    {
      q: '¿Cuál es la forma correcta de usar el comparativo "more" en inglés?',
      opciones: [
        'To compare two elements or quantities',
        'To talk about the past',
        'To describe habits',
        'To express obligation'
      ],
      correcta: 0
    },

    // Posición correcta = 2 → Pregunta 10
    {
      q: 'Completa correctamente: "It’s high time you ____ your homework."',
      opciones: [
        'do',
        'does',
        'did',
        'doing'
      ],
      correcta: 2
    }
  ]
}

  ]
}

};

/* -------------------------
  Navegación y helpers
-------------------------*/
const screens = {
  inicio: document.getElementById('pant-inicio'),
  login: document.getElementById('pant-login'),
  register: document.getElementById('pant-register'),
  rec1: document.getElementById('pant-recov-1'),
  rec2: document.getElementById('pant-recov-2'),
  cuatri: document.getElementById('pant-cuatri'),
  materias: document.getElementById('pant-materias'),
  guiajuego: document.getElementById('pant-guiajuego'),
  guia: document.getElementById('pant-guia'),
  juego: document.getElementById('pant-juego')
};

function show(screenElement) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('active'));
  if (!screenElement) return;
  screenElement.classList.add('active');
}

/* Inicial */
document.addEventListener('DOMContentLoaded', () => {
  show(screens.inicio);
  bootListeners();
});

/* -------------------------
  UI / Listeners
-------------------------*/
let current = { cuatri: 1, materia: null, materiaIndex: 0 };
let gameState = null; // { preguntas: [...], indice, score, orderQuestions }

function bootListeners(){
  // Inicio buttons
  document.getElementById('btn-iniciar').addEventListener('click', ()=> show(screens.login));
  document.getElementById('btn-registrar').addEventListener('click', ()=> show(screens.register));

  // LOGIN – validación de correo @utfv.edu.mx
document.getElementById("form-login").addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("login-email");

  if (!email.checkValidity()) {
    alert("El correo debe terminar en @utfv.edu.mx");
    return;
  }

  // Si es válido, avanzar
  show(screens.cuatri);
});

// Botón volver
document.getElementById('login-cancelar').addEventListener('click', () => {
  show(screens.inicio);
});


  // REGISTRO – validación de correo @utfv.edu.mx
document.getElementById("form-register").addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("reg-email");
  const pass1 = document.getElementById("reg-pass");
  const pass2 = document.getElementById("reg-pass2");

  if (!email.checkValidity()) {
    alert("El correo debe terminar en @utfv.edu.mx");
    return;
  }

  if (pass1.value !== pass2.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Si todo está bien → regresar al inicio
  alert("Registro exitoso");
  show(screens.inicio);
});

// Botón cancelar
document.getElementById('reg-cancelar').addEventListener('click', () => {
  show(screens.inicio);
});

  // Recovery
  document.getElementById('link-olvidaste').addEventListener('click', (e)=>{ e.preventDefault(); show(screens.rec1); });
  document.getElementById('recov-cancel').addEventListener('click', ()=> show(screens.login));
  document.getElementById('recov-confirm').addEventListener('click', ()=> show(screens.rec2));
  document.getElementById('recov-change').addEventListener('click', ()=> { alert('Contraseña cambiada (simulado)'); show(screens.login); });
  document.getElementById('recov-back').addEventListener('click', ()=> show(screens.rec1));

  // Cuatrimestres
  document.querySelectorAll('.cuatri').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const c = parseInt(btn.dataset.c);
      current.cuatri = c;
      loadMaterias(c);
      show(screens.materias);
    });
  });
  document.getElementById('cuatri-back').addEventListener('click', ()=> show(screens.inicio));

  // Materias back
  document.getElementById('materias-back').addEventListener('click', ()=> show(screens.cuatri));

  // Guia/Juego navigation
  document.getElementById('btn-ver-guia').addEventListener('click', ()=> {
    if(!current.materia) return;
    const m = getMateria(current.cuatri, current.materiaIndex);
    document.getElementById('guia-title').innerText = `Guía - ${m.id}`;
    document.getElementById('guia-content').innerText = m.guia || 'Guía no disponible.';
    show(screens.guia);
  });
  document.getElementById('btn-iniciar-juego').addEventListener('click', ()=> {
    if(!current.materia) return alert('Selecciona una materia primero.');
    startGame(current.cuatri, current.materiaIndex);
  });
  document.getElementById('guiajuego-back').addEventListener('click', ()=> show(screens.materias));

  // guia back
  document.getElementById('guia-back').addEventListener('click', ()=> show(screens.guiajuego));

  // Juego controls
  document.getElementById('juego-next').addEventListener('click', ()=> {
    if(!gameState) return;
    if (gameState.indice < gameState.preguntas.length - 1) {
      gameState.indice++;
      renderQuestion();
    } else {
      // fin
      showFinal();
    }
  });
  document.getElementById('juego-prev').addEventListener('click', ()=> {
    if(!gameState) return;
    if (gameState.indice > 0) {
      gameState.indice--;
      renderQuestion();
    }
  });

  // Cancelar en juego: volver a materias y recargar
  document.getElementById('volver-materias').addEventListener('click', () => {
    show(screens.materias);
});


  // toggles de password
  toggleInput('login-password','toggle-login-pass');
  toggleInput('reg-pass','toggle-reg-pass');
}

function toggleInput(id, btnId){
  const input = document.getElementById(id);
  const btn = document.getElementById(btnId);
  if(!input || !btn) return;
  btn.addEventListener('click', ()=>{
    input.type = input.type === 'password' ? 'text' : 'password';
  });
}

/* -------------------------
  Cargar materias dinámicamente
-------------------------*/
function loadMaterias(cuatri){
  const cont = document.getElementById('materias-list');
  const titulo = document.getElementById('materias-titulo');
  cont.innerHTML = '';
  titulo.innerText = data[cuatri] ? data[cuatri].nombre : `Cuatrimestre ${cuatri}`;
  const list = (data[cuatri] && data[cuatri].materias) ? data[cuatri].materias : [];
  list.forEach((m, idx) => {
    const b = document.createElement('button');
    b.className = 'materia-btn';
    b.innerText = m.id;
    b.addEventListener('click', ()=>{
      current.materia = m.id;
      current.materiaIndex = idx;
      document.getElementById('titulo-materia').innerText = m.id;
      show(screens.guiajuego);
    });
    cont.appendChild(b);
  });
}

/* Helper: obtener materia */
function getMateria(cuatri, index){
  if(!data[cuatri] || !data[cuatri].materias) return null;
  return data[cuatri].materias[index];
}

/* -------------------------
  Juego: mezcla preguntas y opciones
-------------------------*/
function startGame(cuatri, materiaIndex){
  const materia = getMateria(cuatri, materiaIndex);
  if(!materia || !materia.preguntas || materia.preguntas.length === 0){
    alert('Aún no hay preguntas para esta materia.');
    return;
  }

  // preparar preguntas: clon + mezcla del orden de preguntas
  const preguntasClon = JSON.parse(JSON.stringify(materia.preguntas));
  shuffleArray(preguntasClon); // mezcla el orden de las preguntas

  gameState = {
    cuatri, materiaIndex,
    preguntas: preguntasClon,
    indice: 0,
    score: 0,
    // cada elemento tendrá .opcionesShuffled y .correctIndexShuffled calculado por renderQuestion
  };

  show(screens.juego);
  renderQuestion();
}

function renderQuestion(){
  const area = document.getElementById('juego-area');
  area.innerHTML = '';
  if(!gameState) return;

  const pObj = gameState.preguntas[gameState.indice];
  // crear copia de opciones con indice original
  let opciones = pObj.opciones.map((t,i) => ({ texto: t, originalIndex: i }));
  // mezcla opciones
  shuffleArray(opciones);

  // calcular nueva posición de la correcta
  const nuevaCorrecta = opciones.findIndex(o => o.originalIndex === pObj.correcta);

  // construir DOM
  const qCard = document.createElement('div');
  qCard.className = 'pregunta-card';
  qCard.innerHTML = `<div style="font-weight:700">Pregunta ${gameState.indice+1} de ${gameState.preguntas.length}</div><div style="margin-top:8px">${pObj.q}</div>`;
  area.appendChild(qCard);

  opciones.forEach((opt, idx) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.dataset.index = idx;
    div.innerText = opt.texto;
    div.addEventListener('click', ()=>{
      // si ya respondido, ignorar
      if (gameState.responded) return;
      gameState.responded = true;

      // marcar seleccionado
      document.querySelectorAll('.opcion').forEach(o => o.classList.remove('selected'));
      div.classList.add('selected');

      // checar correcta
      if (idx === nuevaCorrecta) {
        div.classList.add('correct');
        gameState.score++;
      } else {
        div.classList.add('incorrect');
        // marcar la correcta
        const correctEl = document.querySelector(`.opcion[data-index="${nuevaCorrecta}"]`);
        if (correctEl) correctEl.classList.add('correct');
      }

      // mostrar botones prev/next adecuadamente
      updateNavButtons();
    });
    area.appendChild(div);
  });

  // limpiar responded para esta pregunta si es nueva
  gameState.responded = false;

  // mostrar u ocultar prev/next segun indice
  updateNavButtons();
}

function updateNavButtons(){
  const prev = document.getElementById('juego-prev');
  const next = document.getElementById('juego-next');

  if(!gameState) { prev.style.display = 'none'; next.style.display = 'none'; return; }

  // Prev visible si no estamos en la primer pregunta
  prev.style.display = gameState.indice > 0 ? 'inline-block' : 'none';

  // Next visible si respondido o si se termina (en fin mostramos Siguiente para avanzar)
  next.style.display = gameState.responded ? 'inline-block' : 'none';
}

/* finalizar juego */
function showFinal(){
  const area = document.getElementById('juego-area');
  area.innerHTML = `<div class="pregunta-card">¡Juego terminado! Puntaje: ${gameState.score} / ${gameState.preguntas.length}</div>`;
  document.getElementById('juego-prev').style.display = 'none';
  document.getElementById('juego-next').style.display = 'none';
}

/* -------------------------
  Utilidades
-------------------------*/
function shuffleArray(a){
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
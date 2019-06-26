# Guacamaya

GUACAMAYA es un proyecto de la universidad, en el cual habia que simular una aerolinea.
Este proyecto utiliza una base de datos relacional como mySQL, utiliza angular como framework del frontend y node express para la api,
adicional de la api se utiliza el ORM sequelize

El problema:
El departamento de tecnología de la aerolínea Vuelos Guacamaya ha contactado su equipo para realizar el diseño e implementación de un sistema para la gestión y funcionamiento de la misma.

Las funciones que la aerolínea quiere cumplir con el sistema son variadas, sin embargo una primera entrevista exploratoria arrojó que algunas de las funcionalidades que se quieren implementar son: venta de pasajes para sus vuelos; planificación de vuelos, incluyendo los pasajeros que los mismos poseerán, ruta de vuelo, aviones utilizados, entre otras; planificación de rutas de sus aviones y manejo de personal. Todas estas áreas deberán generar diferentes reportes asociados, entre los que inicialmente se encuentran: cantidad de pasajes vendidos, cantidad de personas programadas para un vuelo versus la cantidad de personas que abordaron dicho vuelo, ganancias en un período de tiempo, demográficas de la venta de los pasajes, los destinos más visitados (tanto en valores fijos como en porcentajes), cantidad numérica y porcentual de vuelos con sobreventa, peso promedio de los vuelos por avión, cantidad de uso de cada avión, aeropuertos más visitados, cantidad de aviones en sus diferentes estados, entre otras.

Para poder diseñar y ejecutar las funcionalidades, a continuación se ofrece la lógica de negocios que el cliente expuso en este primer contacto:

Los pasajes para sus vuelos pueden ser directos o con escalas, con un precio de venta base, que sin embargo y dependiendo del momento de compra, pueden variar por encima del precio base; de tener escalas, el precio base es la sumatoria de los precios base de los distintos vuelos. Para la compra del pasaje es requerido los datos del comprador, de los pasajeros, tipo de asiento, cantidad de piezas de equipaje y el código o los códigos de los vuelos en caso de tener escalas. El pasajero puede reservar sus asientos al momento de compra del pasaje, de lo contrario se asigna al momento de registrarse para el vuelo.

En el caso de sobreventa, los vuelos tienen un porcentaje de ausencia de pasajeros por lo tanto se sobrevenden los pasajes para todos los vuelos, sin embargo en ocasiones se presenta más pasajeros que asientos disponibles, se realiza una oferta para los pasajeros que se postulen, la cual consiste en estadía y comida, hasta el próximo vuelo con mismo origen y destino.

En caso de un vuelo cancelado, se reintegra el dinero a los pasajeros, y se realiza un manifiesto de cancelación, sin embargo un pasajero puede solicitar que lo asignen a otro vuelo de la misma aerolínea, para lo cual se asignaría el próximo vuelo disponible.

Por múltiples motivos, un vuelo puede ser desviado a otro aeropuerto, en cuyo caso se genera una solicitud y una vez aprobada se almacena un manifiesto de desvío, y se solicita un vuelo chárter para todos los pasajeros que abordaron.

Si la aerolínea no tiene disponibilidad de avión para un vuelo, se alquila un avión esto se llama vuelos chárter, en cuyo caso se gestiona igual los pasajeros, sin embargo se registra el avión como alquilado. Para esto se tiene una lista de proveedores, que poseen un tiempo de respuesta y un precio por distancia recorrida del avión alquilado.

Vuelos Guacamaya solo tiene sede en los siguientes aeropuertos: Atlanta, Caracas, Dubai, Miami, New York y París. Todos estos aeropuertos cumplen con identificación de código IATA. Para ayudar al personal de control es importante tener la ciudad y el país de cada aeropuerto, el equipo de gestión de vuelos requieren conocer la distancia de las distintas pistas de aterrizaje y despegue de los aeropuertos, para saber cuáles aviones pueden aterrizar en cada aeropuerto.

Con respecto a los aviones utilizados en los vuelos, la página necesita desplegar un conjunto de características específicas. En primer lugar, los aviones pueden estar en cualquiera de los siguientes estados: En reparación, en vuelo, dañado o en espera; los aviones poseen unas rutas definidas entre los aeropuertos planteados, que pueden no existir de ser un avión recién comprado por ejemplo, para el que hay que estudiar las necesidades de la aerolínea, pudiendo así definir una ruta, o cuando un avión está retirado por avería. Los aviones, además, todos tienen características bases que deben ser definidas como: fabricante, modelo, velocidad máxima, velocidad de crucero, cantidad de asientos (de las diferentes categorías: económica y primera clase), peso vacío, peso máximo, carga máxima de equipaje y de cabina, la tripulación necesaria para pilotar el avión, combustible (tipo y cantidad), cantidad de baños, cantidad de salidas de emergencia, equipo médico disponible, distancia de despegue con carga máxima y acomodaciones internas (tipos de asiento, disponibilidad de internet, televisiones).

Los aviones constan de múltiples tipos de mantenimiento, el inmediato después de cada vuelo que consta de limpieza y revisión superficial de componentes, periódico inhabilita el avión durante un periodo de 7 días y se realiza cada 3 meses, y por fallas en vuelo identificadas durante la revisión inmediata se revisa los datos del vuelo, entre ellos reportes de fallas, en este caso se realiza una revisión de la falla, toma en promedio 3 días, este tipo de falla se presentan en el 25% de los vuelos.




Requerimientos mínimos:
La aplicación debe ser construida utilizando:
NodeJS
ExpressJS
MySQL.
Deberá utilizar sus computadoras como entorno de desarrollo, adicionalmente las entregas deben tener una versión publicada en Now. 
Los proyectos deben utilizar Github




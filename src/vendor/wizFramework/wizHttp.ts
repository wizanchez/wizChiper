/** @module vendor/wizFrameWork/wizHttp */
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

interface interErr {
  val: boolean;
  valMsg: string;
  err: any;
};

/**
 * @class  class to make all request in diferents services ,ejem: Http.instance.get(), Http.instance.post()
 * @author @wizanchez <wizanchez@gmail.com>
 * @version 1.0-beta
 * @copyright wizanchez
 */
class wizHttp {

  /**
   * instancia de la clase Http
   * @instance
   */
  static instance = new wizHttp();

  /**
   *  @method
   * @description metodo para conectarse por metodo get
   * @author @wizanchez <wizanchez@gmail.com>
   * @param {string} url url a conectarse algun servicio por metodo get
   * @throws {Error} Error Conectado ::GET
   * @return {json} devulve la informacion optenida de la peticion
   */
  get = async (props: { url: string, server: string }): Promise<string> => {
    const {
      url,
      server
    } = props;
    try {

      let url_m = `${server}${url}`;
      let req = await fetch(url_m, {
        headers
      });
      let json = await req.json();
      return json;

    } catch (err) {

      const msgErr: interErr = {
        val: false,
        valMsg: 'Error Conectado ::GET',
        err,
      };

      throw Error(msgErr);
    }
  }


  /**
   * @method
   * @description metodo para hacer peticiones de metodo POST por fetch
   * @since
   * @version 1.0.0
   * @author @wizanchez <wizanchez@gmail.com>
   * @param {string} {url=<obligatorio> obtiene el class/metodh del servicio de informaw
   * @param  {json} body=<opcional> arreglo de datos a enviar a la peticion
   * @param  {string} code=<opcional> codigo del cliente a conectar a la DB
   * @param  {string} urlClient=<opcional> url si se va a conectar al cliente
   * @param  {bolean} __SHOW_ALERT_ERROR__}=false si genera error lance un alert
   * @param  {string} urlExternal}=false si se quiere enviar una url, sin la estructura definida, se enviar la url completa en el param urlClient
   * @throws {Error} Error Conectado ::POST
   * @return {json} devulve la informacion optenida de la peticion
   * /
  post = async ({ url, body, __SHOW_ALERT_ERROR__ = __SHOW_ALERT_ERROR__ || false, urlExternal = urlExternal || false }) => {

    const bodyStr = JSON.stringify(body);

    const url_m2 = (urlExternal === true) ? url : `${url_server_main}${url}`;

    console.log('url	:', url_m2);

    console.log('body	:', body);
    try {
      let req = await fetch(url_m2, {
        method: "POST",
        headers,
        body: bodyStr
      });


      let json = await req.json();
      console.log('pppppp===', json);
      return json;

    } catch (err) {

      const send_err = {
        val: false,
        val_msg: `Error Conectado ::POST`,
        data: err
      };

      if (__SHOW_ALERT_ERROR__ === true) {

        WizAlert({
          msg: `Server Principal: ${url_m2}`
        });

        WizAlert({
          msg: `Error al conectar con el server , Favor comuniquese con el equipo de WOLOX `
        });
      }


      throw Error(send_err);
    }
  }*/

}
/**hay hello */
export default wizHttp;
package controllers

import play.api.mvc._
import play.api.data.Form
import play.api.data.Forms._
import models.Mydata



object Application extends Controller {

  case class MyFormData(name:String, mail:String)


  val form1 = Form(
    mapping(
      "name" -> text,
      "mail" -> text,
      "tel" -> text
    )(Mydata.apply)(Mydata.unapply)
  )


  def index = Action {
    val title = "サンプルページ"
    val msg = "サンプルのページです。"
    val content = "content2"
 //   val datas = Mydata.getAll
    val datas = Mydata.getAll
    Ok(views.html.index3(title, msg, form1, datas))
  }


  def sendform = Action { implicit request =>
    val myForm = form1.bindFromRequest
    val data: Mydata = myForm.get
    data.addData
//    //val data: Mydata = myForm.get
//    val title = "サンプルページ"
//    val result = data.addData
//    val msg = "名前：" + data.name + ", メール：" + data.mail
    Ok(views.html.index3("title", "msg", myForm, null))
  }

  def mobile = Action{

    Ok(views.html.mobileindex("タイトル", "メッセージ"))
  }



  def test = Action{
    Ok(views.html.testindex())
  }
  /*
  def param (id:Long) = Action {
    val title = "パラメータページ"
    val msg = "パラメータは" + id + "でした。"
    Ok(views.html.index(title, msg, "hoge"))
  }
*/



  def form = Action {
    val title = "フォーム・サンプル"
    val msg = "名前・メール・年齢を入力ください。"
    Ok(views.html.index(title, msg))
  }

}
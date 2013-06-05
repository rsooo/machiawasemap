package models

import play.api.db._
import anorm._
import play.api.Play.current
import anorm.SqlParser._

/**
 * Created with IntelliJ IDEA.
 * User: a-saitoh
 * Date: 13/05/11
 * Time: 23:26
 * To change this template use File | Settings | File Templates.
 */


  case class Mydata(
                     name: String,
                     mail: String,
                     tel: String) {

    def addData {
      DB.withConnection { implicit c =>
        val id: Int = SQL("insert into mydatas (name, mail, tel) values ({name}, {mail}, {tel})").
          on('name->this.name, 'mail -> this.mail, 'tel -> this.tel).executeUpdate()
      }
    }
  }

  object Mydata {
    val data = {
      get[String]("name") ~
        get[String]("mail") ~
        get[String]("tel") map {
        case name ~ mail ~ tel => Mydata(name, mail, tel)
      }
    }

    def getAll: List[Mydata] = {
      DB.withConnection { implicit c =>
        val datas = SQL("Select * from mydatas").as(Mydata.data *)
        return datas
      }
    }
  }

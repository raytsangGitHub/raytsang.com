using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace ReactWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoAppController(IConfiguration configuration) : ControllerBase
    {
        //use primary constructor new coding style
        private readonly IConfiguration _configuration = configuration;

        //get data from db
        [HttpGet]
        [Route("GetNotes")]
        public JsonResult GetNotes()
        {
            var query = "select * from dbo.Notes";
            DataTable table = new();
            var sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");
            //SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new(query, myCon))
                {
                    var myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        //Post data
        [HttpPost]
        [Route("AddNotes")]
        public JsonResult AddNotes([FromForm] string newNotes)
        {
            var query = "insert into dbo.Notes values(@newNotes)";
            DataTable table = new();
            var sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");
            //SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@newNotes", newNotes);
                    var myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        //Post data
        [HttpDelete]
        [Route("DeleteNotes")]
        public JsonResult DeleteNotes(int id)
        {
            var query = "delete from dbo.Notes where id=@id";
            DataTable table = new();
            var sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");
            //SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    var myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Delete Successfully");
        }
    }
}
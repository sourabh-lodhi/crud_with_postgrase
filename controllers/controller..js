const client = require("../config/dbConnection");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    const query = `INSERT INTO "users" ("name","surname","email","password") 
    VALUES ('${name}','${surname}','${email}','${password}')`;
    const sql = await client.query(query);
    res.status(201).json({
      success: true,
      message: "user register successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    const sql = await client.query(query);
    if (sql.length === 0) {
      return res.status(404).json({
        success: false,
        message: "you are not signup yet please signup then login",
      });
    }
    if (sql[0].email === email && sql[0].password === password) {
      //   const token = jwt.sign({email},"token")
      return res.status(201).json({
        success: true,
        message: "user Login successfully",
        data: { ...sql[0], token },
      });
    }
    return res.status(400).json({
      success: false,
      message: "Invalid credential",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserDetail = async (req, res) => {
  try {
    const query = `SELECT * FROM users `;
    const sql = await client.query(query);
    res.status(201).json({
      success: true,
      message: "Get user details successfully",
      data: sql.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id, name, surname, email } = req.body;
    console.log("==>",req.body)

    const updateUser = await client.query(
      `UPDATE "users" SET "name"='${name}', "surname"='${surname}',email='${email}' WHERE "id" = ${id}`
    );
    return res.status(200).json({
      success: true,
      message: "update user Profile successfully",
      data : updateUser
    });
  } catch (error) {
    console.log("====>",error)
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteUserProfile = async (req, res)=>{

  try {
    const { id } = req.body

    const deleteUserProfile = await client.query(`DELETE users FROM id = ${id}`)
    return res.status(200).json({
      success: true,
      message: "delete user Profile successfully",
      data : deleteUserProfile
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }

}

// createTable = async(req,res)=>{
//     const query = `CREATE TABLE IF NOT EXISTS action_groups (ts TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP)(
//       id int(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//       iban int(255) NOT NULL,
//       startTime TIMESTAMP,
//       endTime TIMESTAMP,
//       timeDuration int,
//       videoUrl varchar(255),
//       status int,
//       isActive boolean,
//       chairpersonuserId int,
//       projectManageruserId int,
//       city_id int,
//       district_id int,
//       brochure varchar(255),
//       company_logo varchar(255),
//       added_by int,
//       last_updated_by int
//     )`;
//     client.query(query);
// }

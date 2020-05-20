function () {
    var myConnector = tableau.makeConnector();

    //myConnector.getSchema = function (schemaCallback) {tableau.log("Hello WDC!") ; }  ;


    myConnector.init = function(initCallback) {
      tableau.authType = tableau.authTypeEnum.basic;
      initCallback();
  }

  myConnector.getSchema = function (schemaCallback) {
//          id: "AccessGroup"
        var acc_grp_cols = [
        {
        id: "AccessGroup",
        dataType: tableau.dataTypeEnum.string
        },
        {
        id: "Description",
        dataType: tableau.dataTypeEnum.string
        }
        ];

        var AccessGroupTable = {
          id: "AccessGroup",
          alias: "Access Group",
          columns: acc_grp_cols
        };
//          id: "Employee",
        var emp_cols = [
          {
          id: "Id",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "EmpId",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "CardNum",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "SupId",
          dataType: tableau.dataTypeEnum.String
          }
          {
          id: "SupName",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "FirstName",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "LastName",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "Active",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "Email",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "BirthDate",
          dataType: tableau.dataTypeEnum.DateTimeOffset
          },
          {
          id: "HireDate",
          dataType: tableau.dataTypeEnum.DateTimeOffset
          },
          {
          id: "PayMethod",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "PayType",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "HoliRule",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "PayCate",
          dataType: tableau.dataTypeEnum.String
          },
          {
          id: "PaygroupId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "LocationId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "JobId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "ProjectId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "OrgLevel1Id",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "OrgLevel2Id",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "OrgLevel3Id",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "OrgLevel4Id",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "PayPolicyId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "ShiftId",
          dataType: tableau.dataTypeEnum.integer
          },
          {
          id: "AccessGroupId",
          dataType: tableau.dataTypeEnum.integer
          }];

          var EmployeeTable = {
            id:"Employee",
            alias:"Employee Table",
            columns:emp_cols
          }
//          id: "Job",
//          id: "Location",
//          id: "OrgLevel1",
//          id: "OrgLevel2",
//          id: "OrgLevel3",
//          id: "OrgLevel4",
//          id: "Paycode",
//          id: "Paygroup",
//          id: "PayMatrix",
//          id: "Reason",
//          id: "Shift",
//          id: "ShiftDet",
//          id: "ShiftLvl",

          //id: "Time"
          //id: "Schedule"
          //id: "ScheduleRequest"
          //id: "Timesheet"
      ];

		schemaCallback([AccessGroupTable,EmployeeTable]);
	};

    myConnector.getData = function (table, doneCallback){
    $.getJSON("http://kew22.ulticlock.com/UtmOdataServices/api/Employee", function(resp) {
        var feat = resp.features,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
                "id": feat[i].id,
                "mag": feat[i].properties.mag,
                "title": feat[i].properties.title,
                "location": feat[i].geometry
            });
        };
    tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "UPQ";
        tableau.submit();
    });
});

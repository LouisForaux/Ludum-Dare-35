var objsel:GameObject;
var ligne:Vector3;
var ray : Ray;
var hit : RaycastHit;
var choisi:boolean;
var materielselectionnee:Material;
var hehe: GameObject[];
function Update () {
    if(Input.GetButtonDown("Fire1")){
        if(choisi==false){
            ray = GetComponent.<Camera>().main.ScreenPointToRay (Input.mousePosition);
            Debug.DrawRay(ray.origin, ray.direction * 100, Color.green);
            if (Physics.Raycast (ray.origin, ray.direction, hit, 100)){
                for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                fooObj.gameObject.SetActiveRecursively(true);
                }

            objsel=hit.collider.gameObject;
            objsel.GetComponent.<Renderer>().material = materielselectionnee;
            var Colision:BoxCollider=objsel.GetComponent("BoxCollider");
            Colision.enabled= false;
            objsel.transform.Find("TestCollision1.1").gameObject.SetActiveRecursively(false);
            objsel.transform.Find("TestCollision1.2").gameObject.SetActiveRecursively(false);
            objsel.transform.Find("TestCollision1.3").gameObject.SetActiveRecursively(false);
            objsel.transform.Find("TestCollision1.4").gameObject.SetActiveRecursively(false);
            objsel.transform.Find("TestCollision1.5").gameObject.SetActiveRecursively(false);
            objsel.transform.Find("TestCollision1.6").gameObject.SetActiveRecursively(false);
            choisi=true;
            }
        }
    }
}
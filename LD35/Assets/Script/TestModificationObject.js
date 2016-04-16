var objsel:GameObject;
var ligne:Vector3;
var ray : Ray;
var hit : RaycastHit;
var choisi:boolean;
var materielselectionnee:Material;
var test:boolean;
var C1: GameObject;
var C2: GameObject;
var C3:GameObject;
var C4:GameObject;
var C5:GameObject;
var C6:GameObject;
function Update () {
    if(Input.GetButtonDown("Fire1")){
        if(choisi==false){
            ray = GetComponent.<Camera>().main.ScreenPointToRay (Input.mousePosition);
            Debug.DrawRay(ray.origin, ray.direction * 100, Color.green);
            if (Physics.Raycast (ray.origin, ray.direction, hit, 100)){
                objsel=hit.collider.gameObject;
                objsel.GetComponent.<Renderer>().material = materielselectionnee;
                for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                    fooObj.gameObject.SetActiveRecursively(true);
                }
            }
            C1=objsel.transform.Find("TestCollision1.1").gameObject;
            C2=objsel.transform.Find("TestCollision1.2").gameObject;
            C3=objsel.transform.Find("TestCollision1.3").gameObject;
            C4=objsel.transform.Find("TestCollision1.4").gameObject;
            C5=objsel.transform.Find("TestCollision1.5").gameObject;
            C6=objsel.transform.Find("TestCollision1.6").gameObject;
        }
    choisi=true;
    Verif();
    }
}
function Verif () {
    yield WaitForSeconds (0.1);
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==true && C2.gameObject.GetComponent("TestCollision").CollisionCube==true){
        if(C3.gameObject.GetComponent("TestCollision").CollisionCube==false && C4.gameObject.GetComponent("TestCollision").CollisionCube==false && C5.gameObject.GetComponent("TestCollision").CollisionCube==false && C6.gameObject.GetComponent("TestCollision").CollisionCube==false){
            choisi=false;
            for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                    fooObj.child.gameobject.SetActiveRecursively(false);
            }
    }
}
if(C3.gameObject.GetComponent("TestCollision").CollisionCube==true && C4.gameObject.GetComponent("TestCollision").CollisionCube==true){
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==false && C2.gameObject.GetComponent("TestCollision").CollisionCube==false && C5.gameObject.GetComponent("TestCollision").CollisionCube==false && C6.gameObject.GetComponent("TestCollision").CollisionCube==false){
        choisi=false;
        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
            for(var i:int=0; i< fooObj.transform.childCount; i++){
                var child = fooObj.transform.GetChild(i).gameObject;
                if(child != null)
                    child.SetActive(false);
        }
}
}
}
if(C5.gameObject.GetComponent("TestCollision").CollisionCube==true && C6.gameObject.GetComponent("TestCollision").CollisionCube==true){
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==false && C2.gameObject.GetComponent("TestCollision").CollisionCube==false && C3.gameObject.GetComponent("TestCollision").CollisionCube==false && C4.gameObject.GetComponent("TestCollision").CollisionCube==false){
        choisi=false;
        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                fooObj.child.gameobject.SetActiveRecursively(false);
        }
}
}
}
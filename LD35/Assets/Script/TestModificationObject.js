var objsel:GameObject;
var indisel:GameObject;
var ligne:Vector3;
var ray : Ray;
var hit : RaycastHit;
var materielselectionnee:Material;
var materielbase:Material;
var test:boolean;
var C1: GameObject;
var C2: GameObject;
var C3:GameObject;
var C4:GameObject;
var C5:GameObject;
var C6:GameObject;
var choisi:boolean;
var cam:GameObject;
function Update () {
    if(Input.GetButtonDown("Fire1")){
        if(choisi==false){
            ray = cam.GetComponent.<Camera>().ScreenPointToRay (Input.mousePosition);
            Debug.DrawRay(ray.origin, ray.direction * 100, Color.green);
            if (Physics.Raycast (ray.origin, ray.direction, hit, 100)){
                objsel=hit.collider.gameObject;
                if(objsel.tag=="Cube"){
                    if(objsel.gameObject.GetComponent("Rotation").inbougeable==false){
                        objsel.GetComponent.<Renderer>().material = materielselectionnee;
                        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                            fooObj.gameObject.SetActiveRecursively(true);
                        }
                        C1=objsel.transform.Find("TestCollision1.1").gameObject;
                        C2=objsel.transform.Find("TestCollision1.2").gameObject;
                        C3=objsel.transform.Find("TestCollision1.3").gameObject;
                        C4=objsel.transform.Find("TestCollision1.4").gameObject;
                        C5=objsel.transform.Find("TestCollision1.5").gameObject;
                        C6=objsel.transform.Find("TestCollision1.6").gameObject;
                        Verif();
                    }
                }
            }
        }
    if(choisi==true){
        raya = GetComponent.<Camera>().main.ScreenPointToRay (Input.mousePosition);
        Debug.DrawRay(raya.origin, raya.direction * 100, Color.green);
        if (Physics.Raycast (raya.origin, raya.direction, hit, 100)){
            indisel=hit.collider.gameObject;
            if(indisel.name=="TestCollision1.1"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x+2,indisel.transform.parent.position.y,indisel.transform.parent.position.z);
                choisi=false;
            }
            if(indisel.name=="TestCollision1.2"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x-2,indisel.transform.parent.position.y,indisel.transform.parent.position.z);
                choisi=false;
            }
            if(indisel.name=="TestCollision1.3"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x,indisel.transform.parent.position.y+2,indisel.transform.parent.position.z);
                choisi=false;
            }
            if(indisel.name=="TestCollision1.4"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x,indisel.transform.parent.position.y-2,indisel.transform.parent.position.z);
                choisi=false;
            }
            if(indisel.name=="TestCollision1.5"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x,indisel.transform.parent.position.y,indisel.transform.parent.position.z+2);
                choisi=false;
            }
            if(indisel.name=="TestCollision1.6"){
                objsel.transform.position=Vector3(indisel.transform.parent.position.x,indisel.transform.parent.position.y,indisel.transform.parent.position.z-2);
                choisi=false;
            }
            if(indisel.tag=="Indicateurs"){
                for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                if(fooObj.gameObject.GetComponent("Rotation").inbougeable==false){
                    fooObj.GetComponent.<Renderer>().material = materielbase;
                }
                for(var ic:int=0; ic< fooObj.transform.childCount; ic++){
                    var childd = fooObj.transform.GetChild(ic).gameObject;
                    if(childd != null)
                        childd.gameObject.GetComponent("TestCollision").CollisionCube=false;
                        childd.SetActive(false);
                }
            }
            }
    if(indisel.tag=="Cube"){
        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                if(fooObj.gameObject.GetComponent("Rotation").inbougeable==false){
                    fooObj.GetComponent.<Renderer>().material = materielbase;
                }
                for(var i:int=0; i< fooObj.transform.childCount; i++){
                    var childc = fooObj.transform.GetChild(i).gameObject;
                    if(childc != null)
                        childc.gameObject.GetComponent("TestCollision").CollisionCube=false;
                        childc.SetActive(false);
        }
}
        choisi=false;
    }
        }
    }
    }
}
function Verif () {
    yield WaitForSeconds (0.1);
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==true && C2.gameObject.GetComponent("TestCollision").CollisionCube==true){
        if(C3.gameObject.GetComponent("TestCollision").CollisionCube==false && C4.gameObject.GetComponent("TestCollision").CollisionCube==false && C5.gameObject.GetComponent("TestCollision").CollisionCube==false && C6.gameObject.GetComponent("TestCollision").CollisionCube==false){
            choisi=false;
            for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
                if(fooObj.gameObject.GetComponent("Rotation").inbougeable==false){
                    fooObj.GetComponent.<Renderer>().material = materielbase;
                }
                for(var i:int=0; i< fooObj.transform.childCount; i++){
                    var child = fooObj.transform.GetChild(i).gameObject;
                    if(child != null)
                        child.gameObject.GetComponent("TestCollision").CollisionCube=false;
                        child.SetActive(false);
                }
            }
        }
    }
if(C3.gameObject.GetComponent("TestCollision").CollisionCube==true && C4.gameObject.GetComponent("TestCollision").CollisionCube==true){
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==false && C2.gameObject.GetComponent("TestCollision").CollisionCube==false && C5.gameObject.GetComponent("TestCollision").CollisionCube==false && C6.gameObject.GetComponent("TestCollision").CollisionCube==false){
        choisi=false;
        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
            if(fooObj.gameObject.GetComponent("Rotation").inbougeable==false){
                    fooObj.GetComponent.<Renderer>().material = materielbase;
        }
            for(var ia:int=0; ia< fooObj.transform.childCount; ia++){
                var childa = fooObj.transform.GetChild(ia).gameObject;
                if(childa != null)
                    childa.gameObject.GetComponent("TestCollision").CollisionCube=false;
                    childa.SetActive(false);
            }
        }
    }
}
if(C5.gameObject.GetComponent("TestCollision").CollisionCube==true && C6.gameObject.GetComponent("TestCollision").CollisionCube==true){
    if(C1.gameObject.GetComponent("TestCollision").CollisionCube==false && C2.gameObject.GetComponent("TestCollision").CollisionCube==false && C3.gameObject.GetComponent("TestCollision").CollisionCube==false && C4.gameObject.GetComponent("TestCollision").CollisionCube==false){
        choisi=false;
        for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("Cube")){
            if(fooObj.gameObject.GetComponent("Rotation").inbougeable==false){
                    fooObj.GetComponent.<Renderer>().material = materielbase;
        }
            for(var ib:int=0; ib< fooObj.transform.childCount; ib++){
                var childb = fooObj.transform.GetChild(ib).gameObject;
                if(childb != null)
                    childb.gameObject.GetComponent("TestCollision").CollisionCube=false;
                    childb.SetActive(false);
            }
        }
    }
}
C1.SetActive(false);
C2.SetActive(false);
C3.SetActive(false);
C4.SetActive(false);
C5.SetActive(false);
C6.SetActive(false);
choisi=true;
}
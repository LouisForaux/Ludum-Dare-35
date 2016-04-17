var cam1 : Camera;
var cam2 : Camera;
var cam3 : Camera;
var ray : Ray;
var hit : RaycastHit;
var Cube : GameObject;
var Perso : GameObject;
 
function Start() {
    cam1.enabled = true;
    cam2.enabled = false;
    cam3.enabled = false;
}
public class CursorScript {
}
function Update() {
    if(Input.GetButtonDown("Fire1") && cam1.enabled==true){
        ray = gameObject.Find("FPSController/FirstPersonCharacter").GetComponent.<Camera>().ScreenPointToRay (Input.mousePosition);
        Debug.DrawRay(ray.origin, ray.direction * 100, Color.green);
        if (Physics.Raycast (ray.origin, ray.direction, hit, 100)){
            var objsel:GameObject=hit.collider.gameObject;
            if(objsel.name=="Borne"){
                cam2.enabled = true;
                cam1.enabled = false;
                cam3.enabled = false;
                GameObject.Find("FPSController").SetActiveRecursively(false);
            }
        }
    }
    if(Input.GetKeyDown("e") && cam2.enabled==true){
        cam3.enabled = true;
        cam1.enabled = false;
        cam2.enabled = false;
        Cube=GameObject.Find("Cube1");
        Cube.gameObject.GetComponent("TestModificationObject").enabled=true;
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.Confined;
    }
    if(Input.GetKeyDown("a")){
        cam1.enabled = true;
        cam3.enabled = false;
        cam2.enabled = false;
        Perso.SetActiveRecursively(true);
        Cube.gameObject.GetComponent("TestModificationObject").enabled=false;
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
    }
}

var objsel:GameObject;
var ligne:Vector3;
var ray : Ray;
var hit : RaycastHit;
var choisi:boolean;
var materielselectionnee:Material;
var test:boolean;
var C1: GameObject;
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
            C1=objsel.transform.Find("TestCollision1.1").gameObject;
            var C2: GameObject=objsel.transform.Find("TestCollision1.2").gameObject;
            var C3: GameObject=objsel.transform.Find("TestCollision1.3").gameObject;
            var C4: GameObject=objsel.transform.Find("TestCollision1.4").gameObject;
            var C5: GameObject=objsel.transform.Find("TestCollision1.5").gameObject;
            var C6: GameObject=objsel.transform.Find("TestCollision1.6").gameObject;
            choisi=true;
            }
    }
}
if(C1.gameObject.GetComponent("TestCollision").Blablabla==true){
    test=true;
}
}
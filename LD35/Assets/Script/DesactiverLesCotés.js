var myBoxCollider : BoxCollider;
function Start () {
    myBoxCollider=gameObject.GetComponent("BoxCollider");
    myBoxCollider.enabled=false;
}
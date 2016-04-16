function Update() {
var yRotation : float = Input.GetAxis("Horizontal");
var xRotation : float = Input.GetAxis("Vertical");
transform.Rotate(Vector3(xRotation,yRotation,0));
}
type Role = "admin" | "editor" | "user";

function performAction(action: string | number, role: Role) {
  // taking descions based on the action and role
  if (role === "admin" && typeof action === "string") {
    // perform something
  }

  if (role === "editor" && typeof action === "number") {
    // perform something
  }
}

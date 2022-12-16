variable "environment" {
  type    = string
  default = "prod"
}

variable "pubsub_connection_string" {
  type = string
  sensitive = true
}

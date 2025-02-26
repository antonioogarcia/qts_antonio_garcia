import {assertEquals, assertStringIncludes, assertArrayIncludes} from "http://deno.land/std/testing/asserts.ts"

let aluno = "lis maciel"
let professores = ['tony', 'caos', 'bixarada', 'TORMENTA']

Deno.test("teste de assertions (api)", () => {
    assertEquals(aluno, "lis maciel");
    assertStringIncludes(aluno, "emerson coelho");
})

Deno.test("testando array do professor (api)", () => {
    assertArrayIncludes(professores, 
        ["tony", "caos", "siles"],
        "opa algo deu errado");
})
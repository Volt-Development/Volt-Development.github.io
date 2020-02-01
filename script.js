function notEmpty(){
    var e = document.getElementById("ceirmeoirce");
    var strUser = e.options[e.selectedIndex].value;

    if (strUser == "Select Script"){
        strUser = "";
    } else if (strUser == "Ninja Legends - Autofarm"){
        strUser = `
_G.isOn = true
while wait(0.1) do 
if _G.isOn == false then break end
game.Players.LocalPlayer.ninjaEvent:FireServer("swingKatana")
local _ = {}
_[1] = game.Workspace.sellTeleportPart
_[2] = game.Players.LocalPlayer.Character.HumanoidRootPart.Position
game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = _[1].CFrame
wait(0.1)
game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(_[2].X, _[2].Y, _[2].Z)
end
`;
    } else if (strUser == "All - Universal Aimbot"){
        strUser = `
loadstring(game:HttpGet("https://pastebin.com/raw/XmBUqK4d"))()
`
    }

    document.getElementById('scriptBox').innerHTML = strUser;
}

notEmpty()
document.getElementById("ceirmeoirce").onchange = notEmpty;

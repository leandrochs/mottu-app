using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Data;
using MottuMaintenance.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MottuMaintenance.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class MecanicoController : ControllerBase
{
    private readonly MottuContext _context;

    public MecanicoController(MottuContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Mecanico>>> GetMecanicos()
    {
        return await _context.Mecanicos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Mecanico>> GetMecanico(int id)
    {
        var mecanico = await _context.Mecanicos.FindAsync(id);

        if (mecanico == null)
        {
            return NotFound();
        }

        return mecanico;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutMecanico(int id, Mecanico mecanico)
    {
        if (id != mecanico.Id)
        {
            return BadRequest();
        }

        _context.Entry(mecanico).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MecanicoExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpPost("promover/{id}")]
    public async Task<IActionResult> PromoverMecanico(int id)
    {
        var mecanico = await _context.Mecanicos.FindAsync(id);
        if (mecanico == null)
        {
            return NotFound();
        }

        if (mecanico.NivelComplexidadeAtual < 3)
        {
            mecanico.NivelComplexidadeAtual++;
            await _context.SaveChangesAsync();
        }

        return Ok(mecanico);
    }

    [HttpGet("maisEficientes")]
    public async Task<ActionResult<IEnumerable<Mecanico>>> GetMecanicosMaisEficientes()
    {
        var mecanicos = await _context.Mecanicos.ToListAsync();
        var maisEficientes = new List<Mecanico>();

        for (int nivel = 1; nivel <= 3; nivel++)
        {
            var maisEficienteNivel = mecanicos
                .Where(m => m.NivelComplexidadeAtual == nivel)
                .OrderByDescending(m => m.NivelComplexidadeAtual == 1 ? m.EficienciaNivel1 :
                                        m.NivelComplexidadeAtual == 2 ? m.EficienciaNivel2 : m.EficienciaNivel3)
                .FirstOrDefault();

            if (maisEficienteNivel != null)
            {
                maisEficientes.Add(maisEficienteNivel);
            }
        }

        return maisEficientes;
    }

    private bool MecanicoExists(int id)
    {
        return _context.Mecanicos.Any(e => e.Id == id);
    }
}
}